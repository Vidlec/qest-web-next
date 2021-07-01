import { gql } from 'apollo-boost'

export const HQGALLERIES_QUERY = gql`
	query HqGalleries {
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
