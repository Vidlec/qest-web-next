import { gql } from 'apollo-boost'

export const CAREER_OFFERINGS_QUERY = gql`
	query {
		careerOfferings {
			id
			language
			title
			slug
		}
	}
`
