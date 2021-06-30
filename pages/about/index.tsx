import Content from 'screens/About/Content'
import {request} from 'graphql-request'
import {HqGalleriesQuery} from '../../gql/generated/types'
import {HQGALLERIES_QUERY} from '../../gql/queries/hqgalleries'

export const getStaticProps = async () => {
	const data = await request<HqGalleriesQuery>(
		process.env.CMS_GRAPHQL_URL!,
		HQGALLERIES_QUERY
	)

	return {
		props: { galleries: data.hqGalleries },
	}
}


export default Content
