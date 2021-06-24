import React from 'react'
import {CareerOfferings} from 'gql/generated/types'
import {Block, Link, List, Technologies, Wrapper} from 'components/CareerOffer/styled'
import Container from 'components/Container'
import Headline from 'components/Headline'
import theme from 'theme/index'
import Paragraph from 'components/Paragraph'
import Row from 'components/Row'
import Col from 'components/Col'

type Props = {
    offer: CareerOfferings
}

const CareerOffer: React.FC<Props> = ({ offer }) => (
    <Wrapper>
        <Container>
            <Block>
                <Headline color={theme.colors.green}>
                    {offer.title}
                </Headline>
                <Paragraph
                    dangerouslySetInnerHTML={{
                        __html: offer.description as string,
                    }}
                />
            </Block>
            <Row>
                <Col mobile={12} desktopSmall={7} desktop={8}>
                    <Block>
                        <h2 className='uppercase'>{offer.careerTechnologiesTitle}</h2>
                        <Technologies
                            dangerouslySetInnerHTML={{
                                __html: offer.careerTechnologiesContent as string,
                            }}
                        />
                    </Block>
                    <Block>
                        <h2 className='uppercase'>{offer.careerExpectedSkillsTitle}</h2>
                        <List
                            dangerouslySetInnerHTML={{
                                __html: offer.careerExpectedSkillsContent as string,
                            }}
                        />
                    </Block>
                    <Block>
                        <h2 className='uppercase'>{offer.endTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.endContent as string,
                            }}
                        />
                    </Block>
                    <Block>
                        <Link href='/contacts'>{offer.endCTA}</Link>
                    </Block>
                </Col>
                <Col>
                    <Block>
                        <h2 className='uppercase'>{offer.careerOfferTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.careerOfferContent as string,
                            }}
                        />
                    </Block>
                </Col>
            </Row>
        </Container>
    </Wrapper>
)

export default CareerOffer
