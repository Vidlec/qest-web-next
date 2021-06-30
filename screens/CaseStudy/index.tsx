import Footer from 'components/Footer'
import Header from 'components/Header'
import * as React from 'react'
import { CaseStudyQuery } from 'gql/generated/types'

const CaseStudyPage: React.FC<CaseStudyQuery> = ({caseStudies}) => {
    const caseStudy = caseStudies![0]
    return (
        <>
            <Header />
            {
                caseStudy?.title
            }
            <Footer />
        </>
    )
}

export default CaseStudyPage