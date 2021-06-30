import React from 'react'
import { CaseStudy } from 'gql/generated/types'
import Container from 'components/Container'
import { ReferenceParagraph } from './ReferenceParagraph'
import {
	Wrapper,
	Image,
	Item,
} from './styled'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

export interface Props {
	caseStudies: CaseStudy[]
}

const Content: React.FC<Props> = ({caseStudies}) => {
	const { t } = useTranslation()

	const list = caseStudies.map((caseStudy) => caseStudy.title as string)
	caseStudies.map((caseStudy) => list.push(caseStudy.title as string))

	return (
		<Container>
			<ReferenceParagraph items={list}>
				Our clients include{' '}
			</ReferenceParagraph>
			<Line></Line>
			<Wrapper>
				{caseStudies.map((caseStudy) => {
					return (
						<Item key={caseStudy?.id} height={caseStudy?.height as number}>
							<Image src={caseStudy?.image?.url} />
						</Item>
					)
				})}

				{caseStudies.map((caseStudy) => {
					return (
						<Item key={caseStudy?.image?.url} height={caseStudy?.height as number}>
							<Image src={caseStudy?.image?.url} />
						</Item>
					)
				})}
			</Wrapper>
		</Container>
	)
}

export default Content
