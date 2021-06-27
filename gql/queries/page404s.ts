import { gql } from 'apollo-boost'

export const PAGE404_QUERY = gql`
	query {
		page404s {
			id
			language
			heading
			description
			image {
				url
				alternativeText
			}
			link
			bgText
		}
	}
`
