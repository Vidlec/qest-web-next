import React from 'react'
import request from 'graphql-request'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import Row from 'components/Row'
import SquareList, { EndHead, ContactUs } from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import PictureList from 'components/PictureList'
import Paragraph from 'components/Paragraph'
import theme from 'theme'
import { useTranslation } from 'react-i18next'
import {
	Career,
	ComponentContentPictureList,
	UploadFile,
    CareerOfferings
} from 'gql/generated/types'
import {
    CAREER_QUERY
} from 'gql/queries/career'
import { useEffect } from 'react'

interface CareerQuery {
	career: Career
}

const CareerPage: React.FC<CareerQuery> = ({ career }) => {
	const { t } = useTranslation()

    ///console.log(career)

	const careerPositions: CareerOfferings[] = []
	const pictureListData: ComponentContentPictureList[] = []

    useEffect(() => {

    }, [])
/*
	if( data ) {
		const { career } = data

		console.log(career.info?.map(item => item))

		career.info?.map(item => {
			item && pictureListData.push(item)
		})

		career.careerPositions?.map(position => {
			console.log(position)
			position && careerPositions.push(position)
			console.log(careerPositions)
		})

		return (
			<>
				<Container>
					<Row>
						<Col mobile={12} desktopSmall={7} desktop={8}>
							<Headline color={theme.colors.green}>
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
								hand={t<string, UploadFile>('about.technologiesImage', {returnObjects: true})}
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
						<ContactUs href="#">{career.somethingElseContact}</ContactUs>
					</SquareList>
	
					<Paragraph
						dangerouslySetInnerHTML={{ __html: career.careerWhy as string}}
					/>
					<Headline>{career.careerWhatHeading}</Headline>
					<PictureList items={pictureListData} />
				</Container>
			</>
		)
	}	
*/
	return null
}

export const getStaticProps = async (context) => {

	console.log("text", process.env.CMS_GRAPHQL_URL!)

	const data = await request<CareerQuery>(process.env.CMS_GRAPHQL_URL!, CAREER_QUERY)

	console.log( data )

	return { props: { career: data.career } }
}

export default CareerPage
