import { gql } from 'apollo-boost'

export const CAREER_QUERY = gql`
	query {
		career(locale: "cs") {
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
