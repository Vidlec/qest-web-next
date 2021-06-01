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

const squareData: { header: string; description: string }[] = [
	{ header: 'C# Developer', description: 'Baví tě C#' },
	{ header: 'React Developer', description: 'Baví tě weby a JavaScript' },
	{ header: 'Node.js Developer', description: 'Backend je vášeň' },
	{ header: 'Obchod', description: 'Backend je vášeň' },
]

const listData: { heading: string; description: string }[] = [
	{ heading: 'C# Developer', description: 'Baví tě C#' },
	{ heading: 'React Developer', description: 'Baví tě weby a JavaScript' },
	{ heading: 'Node.js Developer', description: 'Backend je vášeň' },
	{ heading: 'Obchod', description: 'Backend je vášeň' },
]

const Career: React.FC = () => {
	const { t } = useTranslation()
	return (
		<>
			<Container>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
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
				<Headline>Koho Hledáme</Headline>
				<SquareList squares={squareData}>
					<h5>{t('careers.somethingElseHeading')}</h5>
					<p>{t('careers.somethingElseDescription')}</p>
					<a href="#">{t('careers.somethingElseContact')}</a>
				</SquareList>

				<Paragraph
					dangerouslySetInnerHTML={{ __html: t('careers.careerWhy') }}
				/>
			</Container>
			<Container>
				<Headline>Qest to jsou zkušenosti, schopnosti a vášeň</Headline>
				<PictureList items={listData} />
			</Container>
		</>
	)
}

export default Career
