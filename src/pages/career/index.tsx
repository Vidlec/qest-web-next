import Col from 'components/Col'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Paragraph from 'components/Paragraph'
import Row from 'components/Row'
import TechnologiesCard from 'components/TechnologiesCard'
import { useTranslation } from 'next-i18next'
import React from 'react'
import theme from 'theme'

const Career: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <Row>
          <Col mobile={12} desktopSmall={7} desktop={8}>
            <Headline color={theme.colors.green}>{t('careers.title')}</Headline>
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

        <Paragraph dangerouslySetInnerHTML={{ __html: t('careers.careerWhy') }} />
      </Container>
      <Container>
        <Headline>{t('careers.careerWhatHeading')}</Headline>
      </Container>
    </>
  )
}

export default Career
