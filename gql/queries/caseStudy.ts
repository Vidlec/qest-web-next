import { gql } from 'apollo-boost'

export const CASE_STUDY_QUERY = gql`
	query {
		caseStudies {
			id
			language
			title
            height
			image {
                url
                alternativeText
            }
		}
	}
`
