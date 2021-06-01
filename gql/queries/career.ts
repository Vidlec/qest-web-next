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
            somethingElseHeading
            somethingElseDescription
            somethingElseContact
            careerWhy
		}
	}
`