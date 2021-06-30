import React from 'react'
import {
	Career,
	ComponentContentPictureList,
	CareerOfferings,
	CareerQuery,
} from 'gql/generated/types'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Content from './Content'

export interface Props {
	career: Career
}

const CareerPage: React.FC<CareerQuery> = ({ career }) => {
	console.log(career)
	const careerPositions: CareerOfferings[] = career?.info ?? []
	const pictureListData: ComponentContentPictureList[] = career?.careerPositions
/*
	career.info?.map((item) => {
		item && pictureListData.push(item)
	})

	career.careerPositions?.map((position) => {
		position && careerPositions.push(position)
	})*/

	return (
		<>
			<Header />
			<Content
				{...career}
				careerPositions={careerPositions}
				pictureListData={pictureListData}
			/>
			<Footer />
		</>
	)
}

export default CareerPage
