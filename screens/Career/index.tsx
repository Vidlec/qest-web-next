import React from 'react'
import {
	ComponentContentPictureList,
	CareerOfferings,
	CareerQuery,
	UploadFile,
} from 'gql/generated/types'
import { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Container from 'components/Container'
import Col from 'components/Col'
import Headline from 'components/Headline'
import Text from 'components/Text'
import TechnologiesCard from 'components/TechnologiesCard'
import SquareList, {
	StyledEndHead,
	StyledContactUs,
} from './_components/SquareList'
import PictureList from './_components/PictureList'

import {
	StyledMarginRow,
	StyledLongHeadLine,
	StyledCareerWhy,
	StyledWhyLink,
} from './styled'

const CareerPage: React.FC<CareerQuery> = ({ career }) => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<>
			<Header />
			<Container>
				<StyledMarginRow>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<Headline color={'green'}>
							{career?.title}
						</Headline>
						<Text
							dangerouslySetInnerHTML={{
								__html: career?.description as string,
							}}
						/>
					</Col>
					<Col>
						<TechnologiesCard
							floatImage={t<string, UploadFile>(
								'about.technologiesImage',
								{
									returnObjects: true,
								}
							)}
							technologies={career?.technologies?.technologies}
							description={career?.technologies?.description}
							images={
								career?.technologies?.images as UploadFile[]
							}
							handIsOnMiddle
						/>
					</Col>
				</StyledMarginRow>
				<Headline>{career?.careerWho}</Headline>
				<SquareList
					squares={career?.careerPositions as CareerOfferings[]}
				>
					<StyledEndHead>
						{career?.somethingElseHeading}
					</StyledEndHead>
					<p>{career?.somethingElseDescription}</p>
					<Link href="/contacts">
						<StyledContactUs>
							{career?.somethingElseContact}
						</StyledContactUs>
					</Link>
				</SquareList>

				<StyledCareerWhy>
					{career?.careerWhy}
					<Link href="/reference" passHref>
						<StyledWhyLink>{career?.careerWhyLook}</StyledWhyLink>
					</Link>
				</StyledCareerWhy>

				<StyledLongHeadLine>
					{career?.careerWhatHeading}
				</StyledLongHeadLine>
				<PictureList
					items={career?.info as ComponentContentPictureList[]}
				/>
			</Container>
			<Footer />
		</>
	)
}

export default CareerPage
