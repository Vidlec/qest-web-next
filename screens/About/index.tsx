import * as React from 'react'
import { Form } from 'components/Form'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Content from './Content'

const AboutPage: React.FC = () => {
    return (
        <>
            <Header />
            {Content}
            <Footer />
            <Form />
        </>
    )
}

export default AboutPage
