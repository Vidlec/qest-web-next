import CareerOffer from 'components/CareerOffer'
import { gqlUrl } from 'constants/config'
import { CareerOfferings, CareerOfferQuery, CareerOfferQueryVariables } from 'gql/generated/types'
import { CAREER_OFFER_QUERY } from 'gql/queries/careerOffer'
import { CAREER_OFFERINGS_QUERY } from 'gql/queries/careerOfferings'
import { request } from 'graphql-request'
import React from 'react'

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
  const data = await request(gqlUrl, CAREER_OFFERINGS_QUERY)

  const paths = data.careerOfferings.map((offer: { slug: string }) => {
    return {
      params: { slug: offer.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: Context) => {
  const slug = context.params

  const data = await request<CareerOfferQuery, CareerOfferQueryVariables>(
    gqlUrl,
    CAREER_OFFER_QUERY,
    slug
  )

  return {
    props: { offerArray: data.careerOfferings },
  }
}

	if ( careerOffer ) {
		return {
			props: {
				careerOffer: careerOffer
			}
		}
	}
	
	return { notFound: true }
	
}
