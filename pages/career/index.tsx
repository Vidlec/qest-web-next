import React from 'react'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import Row from 'components/Row'
import SquareList from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import PictureList from 'components/PictureList'
import Paragraph from 'components/Paragraph'
import theme from 'theme'
import { useTranslation } from 'react-i18next'
import {
	ComponentContentCareerPosition,
	ComponentContentPictureList,
} from 'gql/generated/types'

const Career: React.FC = () => {
	const { t } = useTranslation()

	const careerPositions: {
		header: string
		description: string
		color: string
	}[] = []
	const pictureListData: {
		heading: string
		description: string
		color: string
		imgSrc: string
	}[] = []

	t<string, ComponentContentCareerPosition[]>('careers.positions', {
		returnObjects: true,
	}).map((position) => {
		careerPositions.push({
			header: position.heading as string,
			description: position.description as string,
			color: position.color as string,
		})
		return position
	})

	t<string, ComponentContentPictureList[]>('careers.info', {
		returnObjects: true,
	}).map((info) => {
		pictureListData.push({
			heading: info.heading as string,
			description: info.description as string,
			color: info.color as string,
			imgSrc: info.image?.url as string,
		})
		return info
	})

	return (
		<>
			<Container>
				<Row>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<Headline color={theme.colors.green}>
							{t('careers.title')}
						</Headline>
						<Paragraph
							dangerouslySetInnerHTML={{
								__html: t('careers.careerDescription'),
							}}
						/>
					</Col>
					<Col>
						<TechnologiesCard
							src={t('about.technologiesImage.url')}
							alt={t('about.technologiesImage.alternativeText')}
							heading={t('careers.technologiesHeading')}
							__html={t('careers.technologies')}
							handIsOnMiddle
						/>
					</Col>
				</Row>
			</Container>
			<Container>
				<Headline>{t('careers.careerWho')}</Headline>
				<SquareList squares={careerPositions}>
					<h5>{t('careers.somethingElseHeading')}</h5>
					<p>{t('careers.somethingElseDescription')}</p>
					<a href="#">{t('careers.somethingElseContact')}</a>
				</SquareList>

				<Paragraph
					dangerouslySetInnerHTML={{ __html: t('careers.careerWhy') }}
				/>
			</Container>
			<Container>
				<Headline>{t('careers.careerWhatHeading')}</Headline>
				<PictureList items={pictureListData} />
			</Container>
		</>
	)
}

export default Career
