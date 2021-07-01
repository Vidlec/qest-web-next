import React from 'react'
import { Wrapper, Item, Heading, Description, ItemIndex, ItemInformation, ItemImg } from './styled'

interface Props {
  items: {
    heading: string
    description: string
    color: string
    imgSrc: string
    altText?: string
  }[]
}

const PictureList: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Item key={item.heading}>
          <ItemIndex color={item.color}>
            <span>{index + 1}</span>
            <ItemImg src={item.imgSrc} />
          </ItemIndex>
          <ItemInformation>
            <Heading>{item.heading}</Heading>
            <Description dangerouslySetInnerHTML={{ __html: item.description }} />
          </ItemInformation>
        </Item>
      ))}
    </Wrapper>
  )
}

export default PictureList
