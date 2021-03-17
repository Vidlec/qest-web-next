import * as cdk from '@aws-cdk/core'
import { WebStack } from '../stacks/WebStack'

const env = {
	account: process.env.CDK_DEFAULT_ACCOUNT,
	region: process.env.CDK_DEFAULT_REGION,
}

// reused hosted zone and certificate
const hostedZone = 'web.qestapp.net'
const hostedZoneId = process.env.HOSTED_ZONE_ID
const cdnCertificateArn = process.env.CDN_CERTIFICATE_ARN

if (!cdnCertificateArn) {
	throw new Error('Missing cdn certificate arn')
}

if (!hostedZoneId) {
	throw new Error('Missing hosted zone id')
}

const cdnDomainName = `dev.${hostedZone}`
const cdnDomainNameProd = hostedZone

const app = new cdk.App()
new WebStack(app, 'QestWebAppStackDev', {
	env,
	webBucketLibraryOptions: {
		hostedZone,
		hostedZoneId,
		cdnCertificateArn,
		cdnDomainName: cdnDomainName,
		bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-dev',
	},
})

new WebStack(app, 'QestWebAppStackProd', {
	env,
	webBucketLibraryOptions: {
		hostedZone,
		hostedZoneId,
		cdnCertificateArn,
		cdnDomainName: cdnDomainNameProd,
		bucketName: process.env.WEB_BUCKET_NAME || 'qest-web-next-prod',
	},
})
