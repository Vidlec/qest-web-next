import { gql } from 'apollo-boost'

export const ABOUT_QUERY = gql`
	query {
		aboutuses {
			id
			language
			heroDescription
			heroLogo {
				url
			}
		}
	}
`
