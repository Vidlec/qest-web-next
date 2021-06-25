import React from 'react'
import { request } from 'graphql-request'
import { CareerOfferQuery, CareerOfferings, CareerOfferQueryVariables } from 'gql/generated/types'
import { CAREER_OFFERINGS_QUERY } from 'gql/queries/careerOfferings'
import { CAREER_OFFER_QUERY } from 'gql/queries/careerOffer'
import CareerOffer from 'components/CareerOffer'

interface Props {
    offerArray: CareerOfferings[]
}
interface Params {
    slug: string
}
interface Context {
    params: Params
}

const CareerDetail: React.FC<Props> = ({ offerArray }) => {
    return <CareerOffer offer={offerArray[0]} />
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

export const getStaticProps = async (context : Context) => {

    const slug = context.params

    const data = await request<CareerOfferQuery, CareerOfferQueryVariables>(process.env.CMS_GRAPHQL_URL!, CAREER_OFFER_QUERY, slug)

    return {
        props: { offerArray: data.careerOfferings }
    }
}

export default CareerDetail