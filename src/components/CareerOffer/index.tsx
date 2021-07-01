import Col from 'components/Col'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Row from 'components/Row'
import { CareerOfferings } from 'gql/generated/types'
import React from 'react'
import { useTheme } from 'styled-components'
import { Block, Content, Link, List, SubTitle, Technologies } from './styled'

type Props = {
  offer: CareerOfferings
}

const CareerOffer: React.FC<Props> = ({ offer }) => {
  const { colors } = useTheme()

  return (
    <>
      <Container>
        <Block>
          <Headline color={colors.green}>{offer.title}</Headline>
          <Content
            dangerouslySetInnerHTML={{
              __html: offer.description as string,
            }}
          />
        </Block>
        <Row>
          <Col mobile={12} desktopSmall={7} desktop={8}>
            <Block>
              <SubTitle>{offer.careerTechnologiesTitle}</SubTitle>
              <Technologies
                dangerouslySetInnerHTML={{
                  __html: offer.careerTechnologiesContent as string,
                }}
              />
            </Block>
            <Block>
              <SubTitle>{offer.careerExpectedSkillsTitle}</SubTitle>
              <List
                dangerouslySetInnerHTML={{
                  __html: offer.careerExpectedSkillsContent as string,
                }}
              />
            </Block>
            <Block>
              <SubTitle>{offer.endTitle}</SubTitle>
              <Content
                dangerouslySetInnerHTML={{
                  __html: offer.endContent as string,
                }}
              />
            </Block>
            <Block>
              <Link href="/contacts">{offer.endCTA}</Link>
            </Block>
          </Col>
          <Col>
            <Block>
              <SubTitle>{offer.careerOfferTitle}</SubTitle>
              <Content
                dangerouslySetInnerHTML={{
                  __html: offer.careerOfferContent as string,
                }}
              />
            </Block>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CareerOffer
