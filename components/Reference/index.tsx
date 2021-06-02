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
import { ComponentContentReferenceProjects } from '../../gql/generated/types'

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

	t<string, ComponentContentReferenceProjects[]>(
		'reference.referenceProjects',
		{
			returnObjects: true,
		}
	).map((project) => {
		projects.push(
			<span key={project.projectName}>
				{project.projectName}
				<DotSpan color={colors[Math.floor(Math.random() * 5)]}>✦</DotSpan>
			</span>
		)
		return project
	})

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
