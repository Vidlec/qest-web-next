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
