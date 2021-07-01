import { gqlUrl } from 'constants/config'
import { CareerOfferQuery, CareerOfferQueryVariables } from 'gql/generated/types'
import { CAREER_OFFER_QUERY } from 'gql/queries/careerOffer'
import { CAREER_OFFERINGS_QUERY } from 'gql/queries/careerOfferings'
import { request } from 'graphql-request'
import { GetStaticPaths } from 'next'
import CareerOffer, { CareerOfferProps } from 'screens/CareerOffer'
import withTranslations from 'utils/next/withTranslations'

export default CareerOffer

export const getStaticPaths: GetStaticPaths = async () => {
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

type Params = {
  slug: string
}

export const getStaticProps = withTranslations<CareerOfferProps, Params>({
  ns: ['career'],
  getStaticProps: async (context) => {
    const slug = context.params?.slug

    if (!slug) {
      return { notFound: true }
    }

    const { careerOfferings } = await request<CareerOfferQuery, CareerOfferQueryVariables>(
      gqlUrl,
      CAREER_OFFER_QUERY,
      { slug }
    )

    const offer = careerOfferings?.[0]

    if (!offer) {
      return { notFound: true }
    }

    return {
      props: { offer },
    }
  },
})
