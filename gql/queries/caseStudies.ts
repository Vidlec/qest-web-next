import { gql } from 'apollo-boost'

export const CASE_STUDIES_QUERY = gql`
	query CaseStudies {
		caseStudies {
			id
			language
			title
			height
			slug
			image {
				url
				alternativeText
			}
		}
	}
`
