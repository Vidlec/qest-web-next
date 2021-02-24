import * as cdk from '@aws-cdk/core';
import { WebStack } from '../stacks/WebStack';

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
}

// reused hosted zone and certificate
const hostedZone = 'web.qestapp.net'
const hostedZoneId = 'Z07696653PLRSUVHDNRBE'
const cdnCertificateArn = 'arn:aws:acm:us-east-1:318137197756:certificate/33d2f598-3ae3-4ae2-b7ca-9a54871ca4a5'

const cdnDomainName = `dev.${hostedZone}`
const cdnDomainNameProd = hostedZone

const app = new cdk.App();
new WebStack(app, 'QestWebAppStackDev', {
    env,
    webBucketLibraryOptions: {
        hostedZone,
        hostedZoneId,
        cdnCertificateArn,
        cdnDomainName: cdnDomainName,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-dev',
    },
});

new WebStack(app, 'QestWebAppStackProd', {
    env,
    webBucketLibraryOptions: {
        hostedZone,
        hostedZoneId,
        cdnCertificateArn,
        cdnDomainName: cdnDomainNameProd,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-prod',
    },
});