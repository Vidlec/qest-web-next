import React from 'react'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import Row from 'components/Row'
import SquareList, { EndHead, ContactUs } from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import PictureList from 'components/PictureList'
import Paragraph from 'components/Paragraph'
import { useTranslation } from 'react-i18next'
import {
	Career,
	ComponentContentPictureList,
	UploadFile,
	CareerOfferings,
} from 'gql/generated/types'
import { useTheme } from 'styled-components'

export interface Props {
	career: Career
}

const CareerPage: React.FC<Props> = ({ career }) => {
	const { t } = useTranslation()

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
			<Container>
				<Row>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<Headline color={useTheme().colors.green}>
							{career.title}
						</Headline>
						<Paragraph
							dangerouslySetInnerHTML={{
								__html: career.description,
							}}
						/>
					</Col>
					<Col>
						<TechnologiesCard
							hand={t<string, UploadFile>(
								'about.technologiesImage',
								{ returnObjects: true }
							)}
							technologies={career.technologies?.technologies}
							description={career.technologies?.description}
							images={career.technologies?.images}
							id={''}
							handIsOnMiddle
						/>
					</Col>
				</Row>
				<Headline>{career.careerWho}</Headline>
				<SquareList squares={careerPositions}>
					<EndHead>{career.somethingElseHeading}</EndHead>
					<p>{career.somethingElseDescription}</p>
					<ContactUs href="#">
						{career.somethingElseContact}
					</ContactUs>
				</SquareList>

				<Paragraph
					dangerouslySetInnerHTML={{
						__html: career.careerWhy as string,
					}}
				/>
				<Headline>{career.careerWhatHeading}</Headline>
				<PictureList items={pictureListData} />
			</Container>
		</>
	)
}

export default CareerPage
