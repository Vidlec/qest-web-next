import * as React from 'react'
import Content from './Content'
import { CareerOfferings } from 'gql/generated/types'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface Props {
	offerArray: CareerOfferings[]
}

const CareerOffer: React.FC<Props> = ({ offerArray }) => {

    return (
		<>
            <Header />
			<Content offer={offerArray[0]} />
            <Footer />
		</>
	)
}

export default CareerOffer
