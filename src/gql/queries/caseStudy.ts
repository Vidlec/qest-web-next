import { gql } from 'graphql-request'

export const CASE_STUDY_QUERY = gql`
  query CaseStudy($slug: String!) {
    caseStudies(where: { slug: $slug }) {
      id
      title
      slug
    }
  }
`
