import React from 'react'
import { Wrapper, Image, Item } from './styled'
import { CaseStudy } from 'gql/generated/types'
import Link from 'next/link'

export interface Props {
	caseStudies: CaseStudy[]
}

const Masonry: React.FC<Props> = ({ caseStudies }) => {
	return (
		<Wrapper>
			{caseStudies.map((caseStudy) => {
				return (
					<Link
						key={caseStudy?.slug}
						href={`/reference/${caseStudy.slug}`}
						passHref
					>
						<Item height={caseStudy?.height as number}>
							<Image src={caseStudy?.image?.url} />
						</Item>
					</Link>
				)
			})}
		</Wrapper>
	)
}

export default Masonry
