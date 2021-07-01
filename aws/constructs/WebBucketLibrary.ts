import { ICertificate } from '@aws-cdk/aws-certificatemanager'
import {
  AllowedMethods,
  Distribution,
  PriceClass,
  ViewerProtocolPolicy,
} from '@aws-cdk/aws-cloudfront'
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins'
import { Effect, ManagedPolicy, PolicyStatement } from '@aws-cdk/aws-iam'
import { AaaaRecord, ARecord, IHostedZone, RecordTarget } from '@aws-cdk/aws-route53'
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets'
import { Bucket } from '@aws-cdk/aws-s3'
import {
  BUCKET_DELETE_ACTIONS,
  BUCKET_PUT_ACL_ACTIONS,
  BUCKET_PUT_ACTIONS,
  BUCKET_READ_ACTIONS,
} from '@aws-cdk/aws-s3/lib/perms'
import { Construct, RemovalPolicy } from '@aws-cdk/core'

export interface WebBucketLibraryProps {
  bucket: Bucket

  removalPolicy?: RemovalPolicy

  cdnCustomDomain: {
    domainName: string
    hostedZone: IHostedZone
    certificate: ICertificate
  }
}

export class WebBucketLibrary extends Construct {
  public readonly distribution: Distribution
  public readonly mediaManagerPolicy: ManagedPolicy

  public readonly cdnBaseUrl: string

  public constructor(scope: Construct, id: string, props: WebBucketLibraryProps) {
    super(scope, id)

    const mediaManagerPolicy = new ManagedPolicy(this, 'MediaManagerPolicy', {
      statements: [
        new PolicyStatement({
          actions: [
            ...new Set([
              ...BUCKET_READ_ACTIONS,
              ...BUCKET_PUT_ACTIONS,
              ...BUCKET_PUT_ACL_ACTIONS,
              ...BUCKET_DELETE_ACTIONS,
            ]),
          ],
          effect: Effect.ALLOW,
          resources: [props?.bucket.bucketArn, props?.bucket.arnForObjects('*')],
        }),
      ],
    })

    const distribution = new Distribution(this, 'Distribution', {
      enableIpv6: true,
      defaultBehavior: {
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        origin: new S3Origin(props?.bucket),
      },
      defaultRootObject: 'index.html',
      priceClass: PriceClass.PRICE_CLASS_100,
      ...(props?.cdnCustomDomain && {
        certificate: props.cdnCustomDomain.certificate,
        domainNames: [props.cdnCustomDomain.domainName],
      }),
    })

    const { domainName, hostedZone } = props.cdnCustomDomain

    const cloudFrontAlias = RecordTarget.fromAlias(new CloudFrontTarget(distribution))

    new ARecord(this, 'CdnARecord', {
      zone: hostedZone,
      target: cloudFrontAlias,
      recordName: domainName,
    })
    new AaaaRecord(this, 'CdnAAAARecord', {
      zone: hostedZone,
      target: cloudFrontAlias,
      recordName: domainName,
    })

    this.mediaManagerPolicy = mediaManagerPolicy
    this.distribution = distribution
    this.cdnBaseUrl = `https://${
      props?.cdnCustomDomain?.domainName ?? distribution.distributionDomainName
    }`
  }
}
