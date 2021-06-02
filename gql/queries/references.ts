import { gql } from 'apollo-boost'

export const REFERENCE_QUERY = gql`
	query {
		references {
			id
			language
			title
            referenceProjects {
                projectName
            }
		}
	}
`