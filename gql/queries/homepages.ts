import { gql } from 'apollo-boost'

export const HOMEPAGE_QUERY = gql`
	query {
		homepages {
			id
			language
			aboutUs
			reference
			career
			contact
			clickToStop
			descriptionAboveLine
			descriptionBellowLine
		}
	}
`
