import { ComponentContentPictureList } from 'gql/generated/types'
import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import useWindowSize from 'utils/hooks/useWindowSize'
import {
  StyledDescription,
  StyledHeading,
  StyledItem,
  StyledItemImg,
  StyledItemIndex,
  StyledItemIndexNumber,
  StyledItemInformation,
  StyledShowMore,
  StyledShowMoreButton,
  StyledWrapper,
} from './styled'

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
    <StyledWrapper>
      {items.map((item, index) => {
        if (index > 1 && isPhone) {
          return shouldShowMore ? (
            <StyledItem key={item.header}>
              <StyledItemIndex color={item?.color ?? ''}>
                <StyledItemIndexNumber>{index + 1}</StyledItemIndexNumber>
                <StyledItemImg src={item.image?.url} />
              </StyledItemIndex>
              <StyledItemInformation>
                <StyledHeading>{item.header}</StyledHeading>
                <StyledDescription
                  dangerouslySetInnerHTML={{
                    __html: item?.description ?? '',
                  }}
                />
              </StyledItemInformation>
            </StyledItem>
          ) : null
        }
        return (
          <StyledItem key={item.header}>
            <StyledItemIndex color={item?.color ?? ''}>
              <StyledItemIndexNumber>{index + 1}</StyledItemIndexNumber>
              <StyledItemImg src={item.image?.url} />
            </StyledItemIndex>
            <StyledItemInformation>
              <StyledHeading>{item.header}</StyledHeading>
              <StyledDescription
                dangerouslySetInnerHTML={{
                  __html: item?.description ?? '',
                }}
              />
            </StyledItemInformation>
          </StyledItem>
        )
      })}
      {isPhone && (
        <StyledShowMore>
          <StyledShowMoreButton onClick={toggleShowMore}>
            {shouldShowMore ? 'ukázat méně' : `další ${items.length - 2}`}
          </StyledShowMoreButton>
        </StyledShowMore>
      )}
    </StyledWrapper>
  )
}

export default PictureList
