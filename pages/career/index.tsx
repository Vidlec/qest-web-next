import React from 'react'

import Container from 'components/Container'
import Headline from 'components/Headline'
import Col from 'components/Col'
import Row from 'components/Row'
import SquareList from 'components/SquareList'
import TechnologiesCard from 'components/TechnologiesCard'
import theme from 'theme'
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
		<>
            <Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col mobile={12} desktopSmall={7}>
                        <Headline color={theme.colors.green}>{t('about.careerHeadline')}</Headline>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: t('about.careerDescription'),
                            }}
                        />
                    </Col>
                    <Col>
                        <TechnologiesCard
                            src={t('about.technologiesImage.url')}
                            alt={t('about.technologiesImage.alternativeText')}
                            __html={t('about.technologiesDescription')}
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Headline>Koho Hledáme</Headline>
                <SquareList squares={squareData}>
                    <h5>Umíš něco jiného?</h5>
                    <p>Nevadí. Napiš a třeba se domluvíme.</p>
                    <a href="#" >Napiš nám</a>
                </SquareList>

                <p>Líbí se ti naše práce? kounki na více</p>
            </Container>
            <Container>
                <Headline>Qest to jsou zkušenosti, schopnosti a vášeň</Headline>
            </Container>
        </>
	)
}

export default Career
