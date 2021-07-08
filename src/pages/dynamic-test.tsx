import { gqlUrl } from 'constants/config'
import {
  DynamicTestPageFragment,
  DynamicTestQuery,
  DynamicTestQueryVariables,
} from 'gql/generated/types'
import { DYNAMIC_TEST_QUERY } from 'gql/queries/dynamicTest'
import request from 'graphql-request'
import DynamicTest from 'temp'
import withTranslations from 'utils/next/withTranslations'

export default DynamicTest

export const getStaticProps = withTranslations<DynamicTestPageFragment>({
  getStaticProps: async ({ locale }) => {
    const data = await request<DynamicTestQuery, DynamicTestQueryVariables>(
      gqlUrl,
      DYNAMIC_TEST_QUERY,
      {
        locale,
      }
    )

    if (!data.dynamicTest) {
      return { notFound: true }
    }

    return { props: data.dynamicTest }
  },
})
