import { gqlUrl } from 'constants/config'
import { HqGalleriesQuery } from 'gql/generated/types'
import { HQGALLERIES_QUERY } from 'gql/queries/hqgalleries'
import request from 'graphql-request'
import { GetStaticProps } from 'next'
import AboutPage from 'screens/About'
import { AboutPageProps } from 'screens/About/Content'
import { fetchMediumPosts } from 'utils/data/fetchMediumPosts'
import { isDefined } from 'utils/isDefined'
import withTranslations from 'utils/next/withTranslations'

export default AboutPage

export const getStaticProps: GetStaticProps = withTranslations<AboutPageProps>({
  ns: ['aboutUs'],
  getStaticProps: async () => {
    const posts = await fetchMediumPosts()
    const { hqGalleries } = await request<HqGalleriesQuery>(gqlUrl, HQGALLERIES_QUERY)

    const galleries = hqGalleries?.filter(isDefined) ?? []

    return {
      props: {
        posts,
        galleries,
      },
    }
  },
})
