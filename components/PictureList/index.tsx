import React from 'react'
import { Wrapper, Item, Heading, Description } from './styled'

interface Props {
	items: {
		heading: string
		description: string
		imgSrc?: string
	}[]
}

const PictureList: React.FC<Props> = ({ items }) => {
	const content = items.map((i) => (
		<Item key={i.heading}>
			<Heading>{i.heading}</Heading>
			<Description>{i.description}</Description>
		</Item>
	))

	return <Wrapper>{content}</Wrapper>
}

export default PictureList;
