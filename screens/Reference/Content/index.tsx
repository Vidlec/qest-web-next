import React from 'react'
import { CaseStudy } from 'gql/generated/types'
import Container from 'components/Container'
import ReferenceParagraph from './ReferenceParagraph'
import Masonry from './Masonry'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

export interface Props {
	caseStudies: CaseStudy[]
}

const Content: React.FC<Props> = ({ caseStudies }) => {
	const { t } = useTranslation()

	const list = caseStudies.map((caseStudy) => caseStudy.title as string)

	return (
		<Container>
			<ReferenceParagraph items={list}>
				Our clients include{' '}
			</ReferenceParagraph>
			<Line></Line>
			<Masonry caseStudies={caseStudies} />
		</Container>
	)
}

export default Content
