import { CaseStudiesQuery } from 'gql/generated/types'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import { request } from 'graphql-request'
import { GetStaticProps } from 'next'
import Reference from 'screens/CaseStudies'

export default Reference

export const getStaticProps: GetStaticProps = async () => {
  const props = await request<CaseStudiesQuery>(process.env.CMS_GRAPHQL_URL!, CASE_STUDIES_QUERY)

  return { props }
}
