import AboutPage from 'screens/About'
import {request} from 'graphql-request'
import {HqGalleriesQuery} from 'gql/generated/types'
import {HQGALLERIES_QUERY} from 'gql/queries/hqgalleries'
import {GetStaticProps} from 'next'

export const getStaticProps:GetStaticProps = async () => {
	const data = await request<HqGalleriesQuery>(
		process.env.CMS_GRAPHQL_URL!,
		HQGALLERIES_QUERY
	)

	return {
		props: { galleries: data.hqGalleries },
	}
}

export default AboutPage
