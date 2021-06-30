import React from 'react'
import Link from 'next/link'
import { Paragraph, Item, ItemColor } from './styled'

interface Props {
	items: string[]
}

const ReferenceParagraph: React.FC<Props> = ({ children, items }) => {
	const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']
	return (
		<Paragraph>
			{children}
			{items.map((item, index) => {
				return (
					<Link href={`reference/${item}`} passHref>
						<Item key={item + index} color={colors[index % 5]}>
							{item}
						</Item>
					</Link>
				)
			})}
		</Paragraph>
	)
}

export default ReferenceParagraph