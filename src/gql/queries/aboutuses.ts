import { gql } from 'graphql-request'

const Skill = gql`
  fragment Skill on Skill {
    id
    title
    description
    titleColorHash
  }
`

const BrandValue = gql`
  fragment BrandValue on BrandValue {
    id
    headline
    backgroundNumber
    image {
      url
      alternativeText
    }
    description
  }
`

export const ABOUT_QUERY = gql`
  query {
    aboutuses {
      id
      language
      id
      created_at
      updated_at
      language
      heroDescription
      heroLogo {
        url
        alternativeText
      }
      heroHeadlineTop
      heroHeadlineBottom
      heroArrowTitle
      weAreHeadline
      weAreDescription
      weAreArrowTitle
      skillsHeadline
      skillsDescription
      technologiesDescription
      technologiesImage {
        url
        alternativeText
      }
      valuesHeadline
      teamHeadline
      hqHeadline
      hqDescription
      careerHeadline
      careerDescription
      careerCTATitle
      careerCTAImage {
        url
        alternativeText
      }
      blogHeadline
      blogReadMore
      published_at
      weAreImageCarousel {
        id
        url
        alternativeText
      }
      skills {
        ...Skill
      }
      brandValues {
        ...BrandValue
      }
      hqImageGrid {
        id
        url
        alternativeText
      }
      hqWeAreHereImage {
        id
        url
        alternativeText
      }
      hqCTATitle
      hqWeAreHereDescription
      arrow {
        url
        alternativeText
      }
    }
  }
  ${Skill}
  ${BrandValue}
`
