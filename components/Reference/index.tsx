import React from 'react'
import Container from '../Container'
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
import theme from 'theme'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

const colors = [
	theme.colors.blue,
	theme.colors.pink,
	theme.colors.red,
	theme.colors.yellow,
	theme.colors.green,
]

export const ReferencePage: React.FC = () => {
	const { t } = useTranslation()

	const projects: React.ReactElement[] = []

	return (
		<Container>
			<ReferenceParagraph>
				Our clients include {projects}
			</ReferenceParagraph>
			<Line></Line>
			<GalleryWrapper>
				<GridWrapper>
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
		</Container>
	)
}