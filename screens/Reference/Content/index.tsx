import React from 'react'
import Container from 'components/Container'
import { ReferenceParagraph } from './ReferenceParagraph'
import {
	GalleryWrapper,
	GridWrapper,
	GalleryItemCube,
	GalleryItemStand,
	GalleryItemLay,
	WhiteSpace,
	DotSpan,
} from './styled'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

const Content: React.FC = () => {
	const { t } = useTranslation()

	const projects: React.ReactElement[] = []
	const first = ["","","","","","","","",""]
	const second = [""]

	console.log( Math.ceil(first.length / 3), Math.ceil(second.length / 3))

	return (
		<Container>
			<ReferenceParagraph>
				Our clients include {projects}
			</ReferenceParagraph>
			<Line></Line>
			<GalleryWrapper rows={ Math.ceil(first.length / 3) }>
				<GridWrapper rows={ Math.ceil(first.length / 3) }>
					<GalleryItemCube />
					<GalleryItemStand />
					<GalleryItemLay />
					<GalleryItemStand />
					<WhiteSpace />
					<GalleryItemCube />
					<GalleryItemLay />
					<GalleryItemStand />
					<GalleryItemLay />
					<GalleryItemCube />
				</GridWrapper>
			</GalleryWrapper>
			<GalleryWrapper rows={ Math.ceil(second.length / 3 )}>
				<GridWrapper rows={ Math.ceil(second.length / 3 )}>
					<GalleryItemCube />
					<GalleryItemStand />
					<GalleryItemLay />
				</GridWrapper>
			</GalleryWrapper>
		</Container>
	)
}

export default Content
