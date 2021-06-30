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
import useWindowSize from 'hooks/useWindowSize'
import { useTheme } from 'styled-components'

import { ComponentContentPictureList } from 'gql/generated/types'

interface Props {
	items: ComponentContentPictureList[]
}

const PictureList: React.FC<Props> = ({ items }) => {
	const [shouldShowMore, setShouldShowMore] = useState(false)
	const theme = useTheme()
	const isPhone = useWindowSize(theme.mediaQueriesNumbers.desktopSmall, 100)

	const toggleShowMore = () => {
		setShouldShowMore(!shouldShowMore)
	}

	return (
		<Wrapper>
			{items.map((item, index) => {
				if (index > 1 && isPhone) {
					return shouldShowMore ? (
						<Item key={item.header}>
							<ItemIndex color={item.color!}>
								<ItemIndexNumber>{index + 1}</ItemIndexNumber>
								<ItemImg src={item.image?.url} />
							</ItemIndex>
							<ItemInformation>
								<Heading>{item.header}</Heading>
								<Description
									dangerouslySetInnerHTML={{
										__html: item.description!,
									}}
								/>
							</ItemInformation>
						</Item>
					) : null
				}
				return (
					<Item key={item.header}>
						<ItemIndex color={item.color!}>
							<ItemIndexNumber>{index + 1}</ItemIndexNumber>
							<ItemImg src={item.image?.url} />
						</ItemIndex>
						<ItemInformation>
							<Heading>{item.header}</Heading>
							<Description
								dangerouslySetInnerHTML={{
									__html: item.description!,
								}}
							/>
						</ItemInformation>
					</Item>
				)
			})}
			{isPhone && (
				<ShowMore>
					<ShowMoreButton onClick={toggleShowMore}>
						{shouldShowMore
							? 'ukázat méně'
							: `další ${items.length - 2}`}
					</ShowMoreButton>
				</ShowMore>
			)}
		</Wrapper>
	)
}

export default PictureList
