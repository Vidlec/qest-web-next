import React from 'react'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import Row from 'components/Row'
import SquareList, { EndHead, ContactUs } from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import PictureList from 'components/PictureList'
import Paragraph from 'components/Paragraph'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
	Career,
	UploadFile,
    ComponentContentPictureList,
	CareerOfferings,
} from 'gql/generated/types'
import { LongHeadLine } from './styled'

interface Props extends Career {
    careerPositions: CareerOfferings[]
    pictureListData: ComponentContentPictureList[]
}

const Content: React.FC<Props> = ({
	title,
	description,
	technologies,
	careerWho,
	careerPositions,
	somethingElseHeading,
	somethingElseDescription,
	somethingElseContact,
    careerWhy,
    careerWhatHeading,
    pictureListData
}) => {
	const { t } = useTranslation()

	return (
		<Container>
			<Row>
				<Col mobile={12} desktopSmall={7} desktop={8}>
					<Headline color={useTheme().colors.green}>{title}</Headline>
					<Paragraph
						dangerouslySetInnerHTML={{
							__html: description,
						}}
					/>
				</Col>
				<Col>
					<TechnologiesCard
						hand={t<string, UploadFile>('about.technologiesImage', {
							returnObjects: true,
						})}
						technologies={technologies?.technologies}
						description={technologies?.description}
						images={technologies?.images}
						id={''}
						handIsOnMiddle
					/>
				</Col>
			</Row>
			<Headline>{careerWho}</Headline>
			<SquareList squares={careerPositions}>
				<EndHead>{somethingElseHeading}</EndHead>
				<p>{somethingElseDescription}</p>
				<ContactUs href="#">{somethingElseContact}</ContactUs>
			</SquareList>

			<Paragraph
				dangerouslySetInnerHTML={{
					__html: careerWhy as string,
				}}
			/>
			<LongHeadLine>{careerWhatHeading}</LongHeadLine>
			<PictureList items={pictureListData} />
		</Container>
	)
}

export default Content
