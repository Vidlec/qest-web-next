import { gql } from 'graphql-request'

export const CAREER_QUERY = gql`
  query Career($locale: String) {
    career(locale: $locale) {
      id
      created_at
      updated_at
      title
      description
      technologies {
        id
        technologies
        description
        images {
          id
          url
          alternativeText
        }
      }
      careerPositions {
        id
        title
        color
        perex
        slug
      }
      careerWho
      somethingElseHeading
      somethingElseDescription
      somethingElseContact
      careerWhy
      careerWhyLook
      careerWhatHeading
      info {
        id
        header
        color
        description
        image {
          url
          alternativeText
        }
      }
    }
  }
`
