import { gql } from 'apollo-boost'

export const JOBS_QUERY = gql`
	query {
		jobs {
			id
			language
			title
			slug
			description
			careerTechnologiesTitle
			careerTechnologiesContent
			careerExpectedSkills
			careerExpectedSkillsContent
			careerOfferTitle
			careerOfferContent
			endTitle
			endContent
			endCTA
		}
	}
`
