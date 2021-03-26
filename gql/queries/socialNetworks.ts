import { gql } from 'apollo-boost'

export const SOCIAL_NETWORK_QUERY = gql`
	query {
		socialNetworks {
			id
			name
			url
		}
	}
`
