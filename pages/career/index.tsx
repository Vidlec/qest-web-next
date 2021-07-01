import request from 'graphql-request'
import CareerPage from 'screens/Career'
import { CAREER_QUERY } from 'gql/queries/career'
import { GetStaticProps } from 'next'
import { CareerQuery } from 'gql/generated/types'

export default CareerPage

export const getStaticProps: GetStaticProps<CareerQuery> = async (context) => {
	const props = await request<CareerQuery>(
		process.env.CMS_GRAPHQL_URL!,
		CAREER_QUERY
	)

	return { props }
}
