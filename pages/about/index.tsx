import About from 'screens/About'
import {request} from 'graphql-request'
import {ComponentContentGalleryImage, HqGallery, Maybe, UploadFile} from '../../gql/generated/types'
import {HQGALLERIES_QUERY} from '../../gql/queries/hqgalleries'

type HqGalleryQuery = (
	{ __typename?: 'Query' }
	& { hqGalleries?: Maybe<Array<Maybe<(
		{ __typename?: 'HqGallery' }
		& { galleryCollection?: Maybe<Array<Maybe<(
			{ __typename?: 'ComponentContentGalleryImage' }
			& Pick<ComponentContentGalleryImage, 'spacing' | 'rows'>
			& { images?: Maybe<(
				{ __typename?: 'UploadFile' }
				& Pick<UploadFile, 'url' | 'alternativeText' | 'id'>
				)> }
			)>>> }
		)>>> }
	);

export const getStaticProps = async () => {
	const data = await request<HqGalleryQuery>(
		process.env.CMS_GRAPHQL_URL!,
		HQGALLERIES_QUERY
	)

	return {
		props: { galleries: data.hqGalleries },
	}
}


export default About
