import * as cdk from '@aws-cdk/core';
import { WebStack } from '../stacks/WebStack';

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
}

const domainName = 'qestapp.net'
const cdnDomainName = `web-dev.${domainName}`

const domainNameProd = 'qestapp.net'
const cdnDomainNameProd = `web.${domainNameProd}`

const cdnCertificateArn = 'arn:aws:acm:us-east-1:318137197756:certificate/665b4089-09ab-437c-a81d-998acb00238b'

const app = new cdk.App();
new WebStack(app, 'QestWebAppStackDev', {
    env,
    webBucketLibraryOptions: {
        cdnCertificateArn,
        cdnDomainName: cdnDomainName,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-dev',
    },
});

new WebStack(app, 'QestWebAppStackProd', {
    env,
    webBucketLibraryOptions: {
        cdnCertificateArn,
        cdnDomainName: cdnDomainNameProd,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-prod',
    },
});