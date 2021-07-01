import Footer from 'components/Footer'
import Header from 'components/Header'
import * as React from 'react'
import { CaseStudy } from 'gql/generated/types'

export interface Props {
  caseStudy: CaseStudy
}

const CaseStudyPage: React.FC<Props> = ({ caseStudy }) => {
  return (
    <>
      <Header />
      {caseStudy?.title}
      <Footer />
    </>
  )
}

export default CaseStudyPage
