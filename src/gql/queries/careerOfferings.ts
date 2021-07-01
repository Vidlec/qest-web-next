import { gql } from 'graphql-request'

export const CAREER_OFFERINGS_QUERY = gql`
  query {
    careerOfferings {
      id
      language
      title
      slug
    }
  }
`
