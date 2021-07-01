import Reference from 'screens/CaseStudies'
import { request } from 'graphql-request'
import { GetStaticProps } from 'next'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import { CaseStudiesQuery } from 'gql/generated/types'

export default Reference

export const getStaticProps: GetStaticProps = async (context) => {
	const props = await request<CaseStudiesQuery>(
		process.env.CMS_GRAPHQL_URL!,
		CASE_STUDIES_QUERY
	)

	return { props }
}
