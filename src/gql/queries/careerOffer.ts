import { gql } from 'graphql-request'

const CareerOffer = gql`
  fragment CareerOffer on CareerOfferings {
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
`

export const CAREER_OFFER_QUERY = gql`
  query CareerOffer($slug: String!) {
    careerOfferings(where: { slug: $slug }) {
      ...CareerOffer
    }
  }
  ${CareerOffer}
`
