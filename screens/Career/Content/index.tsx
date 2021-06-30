import React from 'react'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import SquareList, { EndHead, ContactUs } from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import PictureList from 'components/PictureList'
import Text from 'components/Text'
import Link from 'next/link'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import {
	Career,
	UploadFile,
	ComponentContentPictureList,
	CareerOfferings,
} from 'gql/generated/types'
import { MarginRow, LongHeadLine, CareerWhy, WhyLink } from './styled'

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

	return (
		<Container>
			<MarginRow>
				<Col mobile={12} desktopSmall={7} desktop={8}>
					<Headline color={theme.colors.green}>{title}</Headline>
					<Text
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
						handIsOnMiddle
					/>
				</Col>
			</MarginRow>
			<Headline>{careerWho}</Headline>
			<SquareList squares={careerPositions}>
				<EndHead>{somethingElseHeading}</EndHead>
				<p>{somethingElseDescription}</p>
				<Link href="/contacts">
					<ContactUs>{somethingElseContact}</ContactUs>
				</Link>
			</SquareList>

			<CareerWhy>
				{careerWhy}
				<Link href="/reference" passHref>
					<WhyLink>{careerWhyLook}</WhyLink>
				</Link>
			</CareerWhy>

			<LongHeadLine>{careerWhatHeading}</LongHeadLine>
			<PictureList items={pictureListData} />
		</Container>
	)
}

export default Content
