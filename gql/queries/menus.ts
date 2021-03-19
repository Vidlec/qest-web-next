import { gql } from 'apollo-boost'

export const MENU_QUERY = gql`
	query {
		menus {
			id
			aboutUs
			career
			contact
			homePage
			language
			menu
			reference
		}
	}
`
