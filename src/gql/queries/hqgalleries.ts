import { gql } from 'graphql-request'

const HqGallery = gql`
  fragment HqGallery on HqGallery {
    galleryCollection {
      spacing
      rows
      images {
        url
        alternativeText
        id
      }
    }
  }
`

export const HQGALLERIES_QUERY = gql`
  query HqGalleries {
    hqGalleries {
      ...HqGallery
    }
  }
  ${HqGallery}
`
