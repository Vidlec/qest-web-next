import { GetStaticProps, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { SSRConfig } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'

const defaultNs = ['common', 'components']

type Props<StaticProps, Query extends ParsedUrlQuery> = {
  ns?: string[]
  getStaticProps?: GetStaticProps<StaticProps, Query>
}

const withTranslations =
  <StaticProps, Query extends ParsedUrlQuery = ParsedUrlQuery>(
    props: Props<StaticProps, Query> = {}
  ) =>
  async (context: GetStaticPropsContext<Query>): Promise<GetStaticPropsResult<SSRConfig>> => {
    const { ns = defaultNs, getStaticProps } = props

    const [translations, staticProps = { props: {} }] = await Promise.all([
      serverSideTranslations(context.locale ?? 'cs', [...ns, ...defaultNs]),
      getStaticProps?.(context),
    ])

    const staticPropsResult = 'props' in staticProps ? staticProps.props : {}

    return { ...staticProps, props: { ...translations, ...staticPropsResult } }
  }

export default withTranslations
