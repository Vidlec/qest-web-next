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
import SquareList, { EndHead, ContactUs } from './_components/SquareList'
import PictureList from './_components/PictureList'

import { MarginRow, LongHeadLine, CareerWhy, WhyLink } from './styled'

const CareerPage: React.FC<CareerQuery> = ({ career }) => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<>
			<Header />
			<Container>
				<MarginRow>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<Headline color={theme.colors.green}>
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
				</MarginRow>
				<Headline>{career?.careerWho}</Headline>
				<SquareList
					squares={career?.careerPositions as CareerOfferings[]}
				>
					<EndHead>{career?.somethingElseHeading}</EndHead>
					<p>{career?.somethingElseDescription}</p>
					<Link href="/contacts">
						<ContactUs>{career?.somethingElseContact}</ContactUs>
					</Link>
				</SquareList>

				<CareerWhy>
					{career?.careerWhy}
					<Link href="/reference" passHref>
						<WhyLink>{career?.careerWhyLook}</WhyLink>
					</Link>
				</CareerWhy>

				<LongHeadLine>{career?.careerWhatHeading}</LongHeadLine>
				<PictureList
					items={career?.info as ComponentContentPictureList[]}
				/>
			</Container>
			<Footer />
		</>
	)
}

export default CareerPage
