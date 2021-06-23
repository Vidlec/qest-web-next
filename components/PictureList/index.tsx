import React from 'react'
import {
	Wrapper,
	Item,
	Heading,
	Description,
	ItemIndex,
	ItemIndexNumber,
	ItemInformation,
	ItemImg,
} from './styled'

import { ComponentContentPictureList } from 'gql/generated/types'

interface Props {
	items: ComponentContentPictureList[]
}

const PictureList: React.FC<Props> = ({ items }) => {
	return (
		<Wrapper>
			{
				items.map((item, index) => (
					<Item key={item.header}>
						<ItemIndex color={item.color as string}>
							<ItemIndexNumber>{index + 1}</ItemIndexNumber>
							<ItemImg src={item.image?.url as string} />
						</ItemIndex>
						<ItemInformation>
							<Heading>{item.header}</Heading>
							<Description dangerouslySetInnerHTML={{__html: item.description as string}} />
						</ItemInformation>
					</Item>
				))
			}
		</Wrapper>
	)
}

export default PictureList
