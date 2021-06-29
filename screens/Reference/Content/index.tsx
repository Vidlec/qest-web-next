import React from 'react'
import Container from 'components/Container'
import { ReferenceParagraph } from './ReferenceParagraph'
import {
	Wrapper,
	GalleryItemCube,
	GalleryItemStand,
	GalleryItemLay,
	WhiteSpace,
	Image,
} from './styled'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

const Content: React.FC = () => {
	const { t } = useTranslation()

	const projects: React.ReactElement[] = []
	const first = ['', '', '', '', '', '', '', '', '']
	const second = ['']

	console.log(Math.ceil(first.length / 3), Math.ceil(second.length / 3))

	return (
		<Container>
			<ReferenceParagraph>
				Our clients include {projects}
			</ReferenceParagraph>
			<Line></Line>
			<Wrapper rows={4}>
				<GalleryItemCube>
					<Image src={'https://dummyimage.com/400x400/000/fff'} />
				</GalleryItemCube>
				<GalleryItemStand>
					<Image src={'https://dummyimage.com/400x600/000/fff'} />
				</GalleryItemStand>
				<GalleryItemLay>
					<Image src={'https://dummyimage.com/600x400/000/fff'} />
				</GalleryItemLay>
				<GalleryItemCube>
					<Image src={'https://dummyimage.com/400x400/000/fff'} />
				</GalleryItemCube>
				<GalleryItemStand>
					<Image src={'https://dummyimage.com/400x600/000/fff'} />
				</GalleryItemStand>
				<GalleryItemLay>
					<Image src={'https://dummyimage.com/600x400/000/fff'} />
				</GalleryItemLay>
				<GalleryItemCube>
					<Image src={'https://dummyimage.com/400x400/000/fff'} />
				</GalleryItemCube>
				<GalleryItemStand>
					<Image src={'https://dummyimage.com/400x600/000/fff'} />
				</GalleryItemStand>
				<GalleryItemLay>
					<Image src={'https://dummyimage.com/600x400/000/fff'} />
				</GalleryItemLay>
				<GalleryItemCube>
					<Image src={'https://dummyimage.com/400x400/000/fff'} />
				</GalleryItemCube>
				<GalleryItemStand>
					<Image src={'https://dummyimage.com/400x600/000/fff'} />
				</GalleryItemStand>
				<GalleryItemLay>
					<Image src={'https://dummyimage.com/600x400/000/fff'} />
				</GalleryItemLay>
			</Wrapper>
		</Container>
	)
}

export default Content
