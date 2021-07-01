import { gql } from 'graphql-request'

export const CASE_STUDIES_QUERY = gql`
  query CaseStudies {
    caseStudies {
      id
      title
      height
      slug
      image {
        url
        alternativeText
      }
    }
  }
`
