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

export const ReferencePage: React.FC = () => {
	return (
		<Container>
			<ReferenceParagraph>
				Our clients include Mall.cz
				<DotSpan color={theme.colors.red}>✦</DotSpan>Abaku 
				<DotSpan color={theme.colors.yellow}>✦</DotSpan>Sportlito
				<DotSpan color={theme.colors.blue}>✦</DotSpan>
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
					<GalleryItemLay  />
					<GalleryItemStand />
					<GalleryItemLay  />
					<GalleryItemCube />
					
				</GridWrapper>
			</GalleryWrapper>
		</Container>
	)
}
