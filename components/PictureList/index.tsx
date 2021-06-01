import React from 'react'
import {
	Wrapper,
	Item,
	Heading,
	Description,
	ItemIndex,
	ItemInformation,
} from './styled'

interface Props {
	items: {
		heading: string
		description: string
		imgSrc?: string
	}[]
}

const PictureList: React.FC<Props> = ({ items }) => {
	const content = items.map((item, index) => (
		<Item key={item.heading}>
			<ItemIndex>{index + 1}</ItemIndex>
			<ItemInformation>
				<Heading>{item.heading}</Heading>
				<Description>{item.description}</Description>
			</ItemInformation>
		</Item>
	))

	return <Wrapper>{content}</Wrapper>
}

export default PictureList
