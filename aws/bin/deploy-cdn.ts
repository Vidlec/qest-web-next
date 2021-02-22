import { App } from '@aws-cdk/core'
import { CdnEnvironment } from '../stacks/CdnEnvironment'

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
}

const hostedZoneName = `qestapp.net`
const app = new App()

const environment = new CdnEnvironment(app, 'QestWebCdnEnvironment', { env, domainName: hostedZoneName })
