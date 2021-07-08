import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { CareerQuery } from 'gql/generated/types'
import React from 'react'

const CareerPage: React.FC<CareerQuery> = () => {
  return (
    <>
      <Header />
      <Container></Container>
      <Footer />
    </>
  )
}

export default CareerPage
