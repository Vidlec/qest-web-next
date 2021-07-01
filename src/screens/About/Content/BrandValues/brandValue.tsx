import { BrandValueFragment } from 'gql/generated/types'
import React from 'react'
import { PictureImg } from '../styled'
import {
  ValueDescription,
  ValueHeadline,
  ValueHeadlineWrapper,
  ValueNumber,
  ValuePicture,
  ValuesColumn,
} from './styled'

interface Props {
  value: BrandValueFragment
}

const AboutBrandValue: React.FC<Props> = ({ value }) => {
  return (
    <>
      <ValuesColumn key={value.id}>
        <ValueHeadlineWrapper>
          <ValueNumber>{value.backgroundNumber}</ValueNumber>

          <ValueHeadline>{value.headline}</ValueHeadline>

          <ValuePicture>
            <PictureImg src={value.image?.url} alt={value.image?.alternativeText ?? ''} />
          </ValuePicture>
        </ValueHeadlineWrapper>

        <ValueDescription>{value.description}</ValueDescription>
      </ValuesColumn>
    </>
  )
}

export default AboutBrandValue
