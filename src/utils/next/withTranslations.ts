import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const defaultNs = ['common']

type Props<StaticProps> = {
    ns?: string[]
    getStaticProps?: GetStaticProps<StaticProps>
}

const withTranslations =
    <StaticProps>({ ns = defaultNs, getStaticProps }: Props<StaticProps>) =>
    async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> => {
        const [translations, staticProps = { props: {} }] = await Promise.all([
            serverSideTranslations(context.locale ?? 'cs', [...ns, ...defaultNs]),
            getStaticProps?.(context),
        ])
        return { props: { ...translations, ...staticProps } }
    }

export default withTranslations
