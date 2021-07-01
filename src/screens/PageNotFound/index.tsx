import * as React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PageNotFoundContent from './PageNotFoundContent'

const PageNotFound: React.FC = () => {
    return (
        <>
            <Header />
            <PageNotFoundContent />
            <Footer />
        </>
    )
}

export default PageNotFound
