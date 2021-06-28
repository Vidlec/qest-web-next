import React, { useState } from 'react'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
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
import { MarginRow, LongHeadLine, ShowMore, ShowMoreButton } from './styled'

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
	careerWhyLook,
	careerWhatHeading,
	pictureListData,
}) => {
	const { t } = useTranslation()
	const theme = useTheme()
	const [showMore, setShowMore] = useState(1)
	let pictureList: ComponentContentPictureList[] = []

	pictureList = [...pictureListData]
	pictureList.length =
		pictureList.length - (pictureList.length - 2) * showMore

	const toggleShowMore = () => {
		setShowMore(showMore ? 0 : 1)
	}

	return (
		<Container>
			<MarginRow>
				<Col mobile={12} desktopSmall={7} desktop={8}>
					<Headline color={theme.colors.green}>{title}</Headline>
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
			</MarginRow>
			<Headline>{careerWho}</Headline>
			<SquareList squares={careerPositions}>
				<EndHead>{somethingElseHeading}</EndHead>
				<p>{somethingElseDescription}</p>
				<ContactUs href="#">{somethingElseContact}</ContactUs>
			</SquareList>

			<Paragraph>
				{careerWhy}
				<a href="">{careerWhyLook}</a>
			</Paragraph>

			<LongHeadLine>{careerWhatHeading}</LongHeadLine>
			<PictureList items={pictureList} />
			<ShowMore>
				<ShowMoreButton onClick={toggleShowMore}>
					{showMore ? (
						<>
							další {pictureListData.length -
								pictureList.length}
						</>
					) : (
						<> ukázat méně </>
					)}
				</ShowMoreButton>
			</ShowMore>
		</Container>
	)
}

export default Content
