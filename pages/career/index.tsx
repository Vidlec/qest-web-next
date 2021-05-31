import React from 'react'

import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import SquareList from 'components/SquareList'
import {
	CareerDescription,
	CareerCTA,
	TechnologiesCard,
	TechnologiesPicture,
	TechnologiesDescription,
	PictureImg,
	SkillsRow,
} from 'components/About/styled'
import { useTranslation } from 'react-i18next'

const squareData: { header: string, description: string }[] = [
	{ header: 'C# Developer', description: 'Baví tě C#' },
	{ header: 'React Developer', description: 'Baví tě weby a JavaScript' },
	{ header: 'Node.js Developer', description: 'Backend je vášeň' },
    { header: 'Obchod', description: 'Backend je vášeň' },
]

const Career: React.FC = () => {
	const { t } = useTranslation()
	return (
		<Container>
			<SkillsRow>
				<Col mobile={12} desktopSmall={7}>
					<Headline>{t('about.careerHeadline')}</Headline>

					<CareerDescription
						dangerouslySetInnerHTML={{
							__html: t('about.careerDescription'),
						}}
					/>
				</Col>
				<Col>
					<TechnologiesCard>
						<TechnologiesPicture>
							<PictureImg
								src={t('about.technologiesImage.url')}
								alt={t(
									'about.technologiesImage.alternativeText'
								)}
							/>
						</TechnologiesPicture>
						<TechnologiesDescription
							dangerouslySetInnerHTML={{
								__html: t('about.technologiesDescription'),
							}}
						/>
					</TechnologiesCard>
				</Col>
			</SkillsRow>
			<Headline>Koho Hledáme</Headline>
			<SquareList squares={squareData}>
                <h5>Umíš něco jiného?</h5>
                <p>Nevadí. Napiš a třeba se domluvíme.</p>
                <a href="#" >Napiš nám</a>
            </SquareList>
		</Container>
	)
}

export default Career
