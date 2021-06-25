import request from 'graphql-request'
import CareerPage, { Props as CareerQuery } from 'screens/career'
import { CAREER_QUERY } from 'gql/queries/career'
import { GetStaticProps } from 'next'

export default CareerPage

export const getStaticProps: GetStaticProps = async (context) => {
	const props = await request<CareerQuery>(
		process.env.CMS_GRAPHQL_URL!,
		CAREER_QUERY
	)

	return { props }
}
