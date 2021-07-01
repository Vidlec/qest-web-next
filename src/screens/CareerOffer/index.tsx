import Col from 'components/Col'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Headline, { ItemColor } from 'components/Headline'
import Row from 'components/Row'
import { CareerOfferFragment } from 'gql/generated/types'
import * as React from 'react'
import {
  StyledBlock,
  StyledContent,
  StyledLink,
  StyledList,
  StyledSubTitle,
  StyledTechnologies,
} from './styled'

export interface CareerOfferProps {
  offer: CareerOfferFragment
}

const CareerOffer: React.FC<CareerOfferProps> = ({ offer }) => {
  const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']

  return (
    <>
      <Header />
      <Container>
        <StyledBlock>
          <Headline color={colors[3]}>{offer.title}</Headline>
          <StyledContent
            dangerouslySetInnerHTML={{
              __html: offer.description as string,
            }}
          />
        </StyledBlock>
        <Row>
          <Col mobile={12} desktopSmall={7} desktop={8}>
            <StyledBlock>
              <StyledSubTitle>{offer.careerTechnologiesTitle}</StyledSubTitle>
              <StyledTechnologies
                dangerouslySetInnerHTML={{
                  __html: offer.careerTechnologiesContent as string,
                }}
              />
            </StyledBlock>
            <StyledBlock>
              <StyledSubTitle>{offer.careerExpectedSkillsTitle}</StyledSubTitle>
              <StyledList
                dangerouslySetInnerHTML={{
                  __html: offer.careerExpectedSkillsContent as string,
                }}
              />
            </StyledBlock>
            <StyledBlock>
              <StyledSubTitle>{offer.endTitle}</StyledSubTitle>
              <StyledContent
                dangerouslySetInnerHTML={{
                  __html: offer.endContent as string,
                }}
              />
            </StyledBlock>
            <StyledBlock>
              <StyledLink href="/contacts">{offer.endCTA}</StyledLink>
            </StyledBlock>
          </Col>
          <Col>
            <StyledBlock>
              <StyledSubTitle>{offer.careerOfferTitle}</StyledSubTitle>
              <StyledContent
                dangerouslySetInnerHTML={{
                  __html: offer.careerOfferContent as string,
                }}
              />
            </StyledBlock>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default CareerOffer
