import { Rows } from 'components/Layout'
import {
  CarouselFragment,
  DynamicTestPageFragment,
  SectionFragment,
  SpecificationsFragment,
  TechInfoFragment,
  TechnologiesBoxFragment,
} from 'gql/generated/types'
import React from 'react'
import { isDefined } from 'utils/isDefined'

const TechnologyInfo: React.FC<TechInfoFragment> = ({ label, technologies }) => {
  return (
    <div>
      {label && <h3>{label}</h3>}
      {technologies &&
        technologies.filter(isDefined).map(({ name }) => <code key={name}>{name}, </code>)}
    </div>
  )
}

const TechnologiesBox: React.FC<TechnologiesBoxFragment> = ({ technologies, description }) => (
  <div>
    Technologies
    {description && <p>{description}</p>}
    {technologies &&
      technologies
        .filter(isDefined)
        .map((technology) => <TechnologyInfo key={technology.id} {...technology} />)}
  </div>
)

const Specifications: React.FC<SpecificationsFragment> = ({ area, client, system }) => (
  <Rows gap={40} padding={40}>
    <p>
      {area} - {client} - {system}
    </p>
  </Rows>
)

const Section: React.FC<SectionFragment> = ({ heading, number, text }) => (
  <div>
    {number && <span>{number}</span>}
    <h2>{heading}</h2>
    <div dangerouslySetInnerHTML={{ __html: text }} />
  </div>
)

const Carousel: React.FC<CarouselFragment> = ({ images }) => (
  <div>
    {images && images.filter(isDefined).map((image) => <img key={image.url} src={image.url} />)}
  </div>
)

const DynamicTest: React.FC<DynamicTestPageFragment> = ({ content, Title, logo, description }) => {
  return (
    <section>
      <h1>{Title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      {logo && <video loop autoPlay muted src={logo.url} />}

      {/** Dynamic section */}
      {content.filter(isDefined).map((dynamicComponent, index) => {
        if (dynamicComponent.__typename === 'ComponentCaseStudySpecifications') {
          return <Specifications key={index} {...dynamicComponent} />
        }
        if (dynamicComponent.__typename === 'ComponentCaseStudyTechnologiesBox') {
          return <TechnologiesBox key={index} {...dynamicComponent} />
        }
        if (dynamicComponent.__typename === 'ComponentContentSection') {
          return <Section key={index} {...dynamicComponent} />
        }
        if (dynamicComponent.__typename === 'ComponentContentCarousel') {
          return <Carousel key={index} {...dynamicComponent} />
        }
      })}
    </section>
  )
}

export default DynamicTest
