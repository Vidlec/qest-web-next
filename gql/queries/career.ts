import { gql } from 'apollo-boost'

export const CAREER_QUERY = gql`
	query Career {
		career(locale: "cs") {
			id
			created_at
			updated_at
			title
			description
			technologies {
				id
				technologies
				description
				images {
					id
					url
					alternativeText
				}
			}
			careerPositions {
				title
				color
				perex
				slug
			}
			careerWho
			somethingElseHeading
			somethingElseDescription
			somethingElseContact
			careerWhy
			careerWhyLook
			careerWhatHeading
			info {
				header
				color
				description
				image {
					url
					alternativeText
				}
			}
		}
	}
`
