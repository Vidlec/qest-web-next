import { gql } from 'apollo-boost'

export const CASE_STUDY_QUERY = gql`
	query CaseStudy($slug: String!) {
		caseStudies(where: { slug: $slug }) {
			id
			title
			slug
		}
	}
`
