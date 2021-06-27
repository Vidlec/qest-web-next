import { gql } from 'apollo-boost'

export const HQGALLERIES_QUERY = gql`
	query {
		hqGalleries {
			galleryCollection {
				spacing
				rows
				images {
					url
					alternativeText
					id
				}
			}
		}
	}
`
