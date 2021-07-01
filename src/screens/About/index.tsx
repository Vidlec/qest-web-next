import Footer from 'components/Footer'
import { Form } from 'components/Form'
import Header from 'components/Header'
import * as React from 'react'
import Content, { AboutPageProps } from './Content'

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <>
      <Header />
      <Content {...props} />
      <Footer />
      <Form />
    </>
  )
}

export default AboutPage
