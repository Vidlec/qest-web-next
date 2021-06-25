import React from 'react'
import {
	Career,
	ComponentContentPictureList,
	CareerOfferings,
} from 'gql/generated/types'
import Content from './Content'

export interface Props {
	career: Career
}

const CareerPage: React.FC<Props> = ({ career }) => {
	const careerPositions: CareerOfferings[] = []
	const pictureListData: ComponentContentPictureList[] = []

	career.info?.map((item) => {
		item && pictureListData.push(item)
	})

	career.careerPositions?.map((position) => {
		position && careerPositions.push(position)
	})

	return (
		<>
			<Content
				{ ...career }
				careerPositions={careerPositions}
				pictureListData={pictureListData}
			/>
		</>
	)
}

export default CareerPage
