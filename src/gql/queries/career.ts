import { gql } from 'graphql-request'

const CareerPositions = gql`
  fragment CareerPositions on CareerOfferings {
    id
    language
    title
    slug
    perex
    color
  }
`

const CareerPage = gql`
  fragment CareerPage on Career {
    careerPositions {
      ...CareerPositions
    }
  }
  ${CareerPositions}
`

export const CAREER_PAGE_QUERY = gql`
  query Career {
    career {
      ...CareerPage
    }
  }
  ${CareerPage}
`
