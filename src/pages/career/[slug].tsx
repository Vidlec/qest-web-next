import { request } from 'graphql-request'
import {
	CareerOfferQuery,
	CareerOfferings,
	CareerOfferQueryVariables,
} from 'gql/generated/types'
import { CAREER_OFFERINGS_QUERY } from 'gql/queries/careerOfferings'
import { CAREER_OFFER_QUERY } from 'gql/queries/careerOffer'
import CareerOffer, { Props as CareerOfferProps } from 'screens/CareerOffer'
import { GetStaticPaths } from 'next'
import { GetStaticProps } from 'next'

interface Params {
	slug: string
}
interface Context {
	params: Params
}

export default CareerOffer

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await request<{ careerOfferings: CareerOfferings[] }>(
		process.env.CMS_GRAPHQL_URL!,
		CAREER_OFFERINGS_QUERY
	)

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
        process.env.CMS_GRAPHQL_URL!,
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
