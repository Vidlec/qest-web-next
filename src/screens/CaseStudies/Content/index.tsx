import React from 'react'
import { CaseStudy } from 'gql/generated/types'
import Container from 'components/Container'
import ReferenceParagraph from './ReferenceParagraph'
import Masonry from './Masonry'
import { ReferenceLine } from './styled'

export interface Props {
  caseStudies: CaseStudy[]
}

const Content: React.FC<Props> = ({ caseStudies }) => {
  return (
    <Container>
      <ReferenceParagraph items={caseStudies}>Our clients include </ReferenceParagraph>
      <ReferenceLine />
      <Masonry caseStudies={caseStudies} />
    </Container>
  )
}

export default Content
