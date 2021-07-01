import { gql } from 'graphql-request'

export const CAREER_OFFER_QUERY = gql`
    query CareerOffer($slug: String!) {
        careerOfferings(where: { slug: $slug }) {
            id
            language
            title
            slug
            description
            careerTechnologiesTitle
            careerTechnologiesContent
            careerExpectedSkillsTitle
            careerExpectedSkillsContent
            careerOfferTitle
            careerOfferContent
            endTitle
            endContent
            endCTA
        }
    }
`
