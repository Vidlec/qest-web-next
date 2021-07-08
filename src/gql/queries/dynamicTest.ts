import { gql } from 'graphql-request'

const Specifications = gql`
  fragment Specifications on ComponentCaseStudySpecifications {
    __typename
    area
    system
    client
  }
`

const Tech = gql`
  fragment Tech on TechList {
    name
  }
`

const TechInfo = gql`
  fragment TechInfo on ComponentContentTechnologiesList {
    id
    label
    technologies {
      ...Tech
    }
  }
  ${Tech}
`

const TechnologiesBox = gql`
  fragment TechnologiesBox on ComponentCaseStudyTechnologiesBox {
    __typename
    description
    technologies {
      ...TechInfo
    }
  }
  ${TechInfo}
`

const Section = gql`
  fragment Section on ComponentContentSection {
    __typename
    heading
    number
    text
  }
`

const SubSection = gql`
  fragment SubSection on ComponentContentSubSection {
    __typename
    header
    text
  }
`

const Carousel = gql`
  fragment Carousel on ComponentContentCarousel {
    __typename
    images {
      url
    }
  }
`

const DynamicTestPage = gql`
  fragment DynamicTestPage on DynamicTest {
    Title
    logo {
      url
    }
    description
    content {
      ... on ComponentCaseStudySpecifications {
        ...Specifications
      }

      ... on ComponentCaseStudyTechnologiesBox {
        ...TechnologiesBox
      }

      ... on ComponentContentSection {
        ...Section
      }

      ... on ComponentContentSubSection {
        ...SubSection
      }

      ... on ComponentContentCarousel {
        ...Carousel
      }
    }
  }
  ${Specifications}
  ${TechnologiesBox}
  ${SubSection}
  ${Section}
  ${Carousel}
`

export const DYNAMIC_TEST_QUERY = gql`
  query DynamicTest($locale: String) {
    dynamicTest(locale: $locale) {
      ...DynamicTestPage
    }
  }
  ${DynamicTestPage}
`
