import { gql } from 'apollo-boost'

export const CAREER_QUERY = gql`
	query {
		careers {
			id
            language
            title
            technologiesHeading
            technologies
            careerDescription
            careerWho
            somethingElseHeading
            somethingElseDescritption
            somethingElseContact
            careerWhy
            careerWhatHeading
            positions {
                heading
                description
                color
            }
            info {
                heading
                description
                color
                image {
                    url
				    alternativeText
                }
            }
		}
	}
`