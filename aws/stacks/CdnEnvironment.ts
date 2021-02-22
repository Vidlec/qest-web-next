import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { Certificate, CertificateValidation } from '@aws-cdk/aws-certificatemanager'

export interface EnvironmentProps extends StackProps {
    domainName: string
}

export class CdnEnvironment extends Stack {
    public readonly cdnCertificate: Certificate

    public constructor(scope: Construct, id: string, { domainName, ...props }: EnvironmentProps) {
        super(scope, id, props)

        this.cdnCertificate = new Certificate(this, 'CdnCertificate', { domainName, subjectAlternativeNames: [`*.${domainName}`], validation: CertificateValidation.fromDns()})
    }
}
