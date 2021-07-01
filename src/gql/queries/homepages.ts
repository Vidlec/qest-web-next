import { gql } from 'graphql-request'

export const HOMEPAGE_QUERY = gql`
  query {
    homepages {
      id
      language
      clickToStop
      descriptionAboveLine
      descriptionBellowLine
      logo {
        url
      }
    }
  }
`
