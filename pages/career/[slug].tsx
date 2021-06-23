import React, {useState} from 'react'
import { request } from 'graphql-request'
import {CareerOfferQuery, CareerOfferQueryVariables} from 'gql/generated/types'
import { CAREER_OFFERINGS_QUERY } from 'gql/queries/careerOfferings'
import { CAREER_OFFER_QUERY } from 'gql/queries/careerOffer'
import Paragraph from 'components/Paragraph'
import theme from 'theme'
import Container from 'components/Container'
import Col from 'components/Col'
import Row from 'components/Row'
import Headline from 'components/Headline'

const CareerDetail: React.FC<any> = ({ offerArray }) => {
    const [ offer ] = useState(offerArray[0])

    return (
        <>
            <Container>
                <Headline color={theme.colors.green}>
                    {offer.title}
                </Headline>
                <Paragraph
                    dangerouslySetInnerHTML={{
                        __html: offer.description,
                    }}
                />
                <Row>
                    <Col mobile={12} desktopSmall={7} desktop={8}>
                        <h2>{offer.careerTechnologiesTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.careerTechnologiesContent,
                            }}
                        />
                        <h2>{offer.careerExpectedSkillsTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.careerExpectedSkillsContent,
                            }}
                        />
                        <h2>{offer.endTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.endContent,
                            }}
                        />
                        <a href="/contacts">{offer.endCTA}</a>
                    </Col>
                    <Col>
                        <h2>{offer.careerOfferTitle}</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: offer.careerOfferContent,
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getStaticPaths = async () => {
    const data = await request(process.env.CMS_GRAPHQL_URL!, CAREER_OFFERINGS_QUERY)

    const paths = data.careerOfferings.map((offer: { slug: string }) => {
        return {
            params: { slug: offer.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const variables = {
        slug: context.params.slug
    }

    const data = await request<CareerOfferQuery, CareerOfferQueryVariables>(process.env.CMS_GRAPHQL_URL!, CAREER_OFFER_QUERY, variables)

    return {
        props: { offerArray: data.careerOfferings }
    }
}

export default CareerDetail
