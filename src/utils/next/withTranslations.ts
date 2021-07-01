import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const defaultNs = ['common', 'components']

type Props<StaticProps> = {
  ns?: string[]
  getStaticProps?: GetStaticProps<StaticProps>
}

const withTranslations =
  <StaticProps>(props: Props<StaticProps> = {}) =>
  async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> => {
    const { ns = defaultNs, getStaticProps } = props

    const [translations, staticProps = { props: {} }] = await Promise.all([
      serverSideTranslations(context.locale ?? 'cs', [...ns, ...defaultNs]),
      getStaticProps?.(context),
    ])
    return { props: { ...translations, ...staticProps } }
  }

export default withTranslations
