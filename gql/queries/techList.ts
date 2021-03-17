import { gql } from 'apollo-boost'

export const TECH_LIST_QUERY = gql`
	query {
		techLists {
			id
			name
		}
	}
`
