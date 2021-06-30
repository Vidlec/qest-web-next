import React from 'react'
import { CaseStudy } from 'gql/generated/types'
import Container from 'components/Container'
import ReferenceParagraph from './ReferenceParagraph'
import Masonry from './Masonry'
import Line from 'components/Line'

export interface Props {
	caseStudies: CaseStudy[]
}

const Content: React.FC<Props> = ({ caseStudies }) => {

	return (
		<Container>
			<ReferenceParagraph items={caseStudies}>
				Our clients include{' '}
			</ReferenceParagraph>
			<Line></Line>
			<Masonry caseStudies={caseStudies} />
		</Container>
	)
}

export default Content
