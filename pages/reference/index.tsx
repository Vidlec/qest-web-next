import Reference from 'screens/Reference'
import { request } from 'graphql-request'
import { GetStaticProps } from 'next'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import { CaseStudy } from 'gql/generated/types'

export default Reference

export const getStaticProps: GetStaticProps = async (context) => {
	const props = await request<CaseStudy>(
		process.env.CMS_GRAPHQL_URL!,
		CASE_STUDIES_QUERY
	)

	return { props }
}
