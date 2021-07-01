import { gqlUrl } from 'constants/config'
import { CareerQuery, CareerQueryVariables } from 'gql/generated/types'
import { CAREER_QUERY } from 'gql/queries/career'
import request from 'graphql-request'
import { GetStaticProps } from 'next'
import CareerPage from 'screens/Career'

export default CareerPage

export const getStaticProps: GetStaticProps<CareerQuery> = async (context) => {
  const props = await request<CareerQuery, CareerQueryVariables>(gqlUrl, CAREER_QUERY, {
    locale: context.locale,
  })

  return { props }
}
