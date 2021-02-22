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

const app = new cdk.App();
new WebStack(app, 'QestWebAppStackDev', {
    env,
    webBucketLibraryOptions: {
        cdnCertificateArn: 'arn:aws:acm:us-east-1:562155573784:certificate/7d3b3c1b-b4b9-40ee-9ae8-00ce4888bf5b',
        cdnDomainName: cdnDomainName,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-dev',
    },
});

new WebStack(app, 'QestWebAppStackProd', {
    env,
    webBucketLibraryOptions: {
        cdnCertificateArn: 'arn:aws:acm:us-east-1:562155573784:certificate/7d3b3c1b-b4b9-40ee-9ae8-00ce4888bf5b',
        cdnDomainName: cdnDomainNameProd,
        bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-prod',
    },
});