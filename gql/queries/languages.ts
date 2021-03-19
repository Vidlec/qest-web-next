import { gql } from 'apollo-boost'

export const LANGUAGE_QUERY = gql`
	query {
		languages {
			id
			languageCode
			displayName
		}
	}
`
