import React from 'react'
import { CaseStudy } from 'gql/generated/types'
import Content from './Content'
import Header from 'components/Header'
import Footer from 'components/Footer'

export interface Props {
  caseStudies: CaseStudy[]
}

const Reference: React.FC<Props> = ({ caseStudies }) => {
  return (
    <>
      <Header />
      <Content caseStudies={caseStudies} />
      <Footer />
    </>
  )
}

export default Reference
