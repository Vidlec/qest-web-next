import { gql } from 'apollo-boost'

export const HEADER_QUERY = gql`
	query {
		headers {
			id
			language
			title
			description
		}
	}
`
