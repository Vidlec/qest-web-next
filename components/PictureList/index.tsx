import React, { useState } from 'react'
import {
	Wrapper,
	Item,
	Heading,
	Description,
	ItemIndex,
	ItemIndexNumber,
	ItemInformation,
	ItemImg,
	ShowMore,
	ShowMoreButton,
} from './styled'

import { ComponentContentPictureList } from 'gql/generated/types'

interface Props {
	items: ComponentContentPictureList[]
}

const PictureList: React.FC<Props> = ({ items }) => {
	const [showMore, setShowMore] = useState(false)

	const toggleShowMore = () => {
		setShowMore(!showMore)
	}

	return (
		<Wrapper>
			{items.map((item, index) => {
				if (index > 1) {
					if (showMore) {
						return (
							<Item key={item.header}>
								<ItemIndex color={item.color as string}>
									<ItemIndexNumber>
										{index + 1}
									</ItemIndexNumber>
									<ItemImg src={item.image?.url as string} />
								</ItemIndex>
								<ItemInformation>
									<Heading>{item.header}</Heading>
									<Description
										dangerouslySetInnerHTML={{
											__html: item.description as string,
										}}
									/>
								</ItemInformation>
							</Item>
						)
					}
				} else {
					return (
						<Item key={item.header}>
							<ItemIndex color={item.color as string}>
								<ItemIndexNumber>{index + 1}</ItemIndexNumber>
								<ItemImg src={item.image?.url as string} />
							</ItemIndex>
							<ItemInformation>
								<Heading>{item.header}</Heading>
								<Description
									dangerouslySetInnerHTML={{
										__html: item.description as string,
									}}
								/>
							</ItemInformation>
						</Item>
					)
				}
			})}
			<ShowMore>
				<ShowMoreButton onClick={toggleShowMore}>
					{showMore ? (
						<>ukázat méně</>
					) : (
						<>další {items.length - 2}</>
					)}
				</ShowMoreButton>
			</ShowMore>
		</Wrapper>
	)
}

export default PictureList
