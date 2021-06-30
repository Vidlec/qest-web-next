import React from 'react'
import Link from 'next/link'
import { Paragraph, Item, ItemColor } from './styled'
import { CaseStudy } from 'gql/generated/types'

interface Props {
	items: CaseStudy[]
}

const ReferenceParagraph: React.FC<Props> = ({ children, items }) => {
	const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']

	return (
		<Paragraph>
			{children}
			{items.map((item, index) => {
				return (
					<Link
						key={item.slug}
						href={`/reference/${item.slug}`}
						passHref
					>
						<Item color={colors[index % items.length]}>
							{item.title}
						</Item>
					</Link>
				)
			})}
		</Paragraph>
	)
}

export default ReferenceParagraph
