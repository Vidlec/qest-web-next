import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';
import { CfnOutput, StackProps } from '@aws-cdk/core';
import { BlockPublicAccess } from '@aws-cdk/aws-s3';
import { HostedZone } from '@aws-cdk/aws-route53'
import { Certificate } from '@aws-cdk/aws-certificatemanager'
import { WebBucketLibrary } from '../constructs/WebBucketLibrary';

export interface WebStackProps extends StackProps {
  webBucketLibraryOptions: {
    hostedZone: string
    hostedZoneId: string
    cdnCertificateArn: string
    cdnDomainName: string
    bucketName: string
  }
}

export class WebStack extends cdk.Stack {
  constructor(scope: cdk.Construct,
    id: string, {
      webBucketLibraryOptions,
      ...props
    }: WebStackProps) {
    super(scope, id, props);

    const webSiteBucket = new s3.Bucket(this, `WebSiteBucket-${webBucketLibraryOptions.bucketName}`, {
      bucketName: webBucketLibraryOptions.bucketName,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });
    new cdk.CfnOutput(this, `WebSiteBucket`, { value: webSiteBucket.bucketName });

    new s3deploy.BucketDeployment(this, 'QestWebBuild', {
      sources: [s3deploy.Source.asset('build/')],
      destinationBucket: webSiteBucket
    });

    const hostedZoneForCdn = HostedZone.fromHostedZoneAttributes(this, 'CdnHostedZone', { hostedZoneId: webBucketLibraryOptions.hostedZoneId, zoneName: webBucketLibraryOptions.hostedZone  })

    const cdnCertificate = Certificate.fromCertificateArn(this, 'CdnCertificate', webBucketLibraryOptions.cdnCertificateArn)
    const webBucketLibrary = new WebBucketLibrary(this, 'WebBucketLibrary', {
      bucket: webSiteBucket,
      cdnCustomDomain: {
        hostedZone: hostedZoneForCdn,
        certificate: cdnCertificate,
        domainName: webBucketLibraryOptions.cdnDomainName,
      },
    })
    new CfnOutput(this, 'CdnBaseUrl', { value: webBucketLibrary.cdnBaseUrl })
  }
}
