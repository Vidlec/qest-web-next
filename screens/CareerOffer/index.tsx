import * as React from 'react'
import Content from './Content'
import { CareerOfferings, CareerOfferQuery } from 'gql/generated/types'
import Header from 'components/Header'
import Footer from 'components/Footer'

export interface Props {
	careerOffer: CareerOfferings
}

const CareerOffer: React.FC<Props> = ({ careerOffer }) => {
	return (
		<>
			<Header />
			<Content offer={careerOffer} />
			<Footer />
		</>
	)
}

export default CareerOffer
