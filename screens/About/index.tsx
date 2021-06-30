import * as React from 'react'
import { Form } from 'components/Form'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Content from './Content'
import {HqGallery} from 'gql/generated/types'

interface Props {
    galleries: HqGallery[]
}

const AboutPage: React.FC<Props> = ({ galleries }) => {
    return (
        <>
            <Header />
            <Content galleries={galleries} />
            <Footer />
            <Form />
        </>
    )
}

export default AboutPage
