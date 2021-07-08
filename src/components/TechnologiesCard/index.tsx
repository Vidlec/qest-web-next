import { ComponentContentTechnologies, UploadFile } from 'gql/generated/types'
import Image from 'next/image'
import React from 'react'
import { isDefined } from 'utils/isDefined'
import {
  StyledCard,
  StyledDescription,
  StyledHeading,
  StyledImageWrapper,
  StyledPicture,
} from './styled'

interface Props extends Omit<ComponentContentTechnologies, 'id' | 'created_at' | 'updated_at'> {
  floatImage: UploadFile
  heading?: string
  __html?: string
  handIsOnMiddle?: boolean
}

const TechnologiesCard: React.FC<Props> = ({
  floatImage,
  handIsOnMiddle,
  technologies,
  description,
  images,
}) => {
  return (
    <StyledCard>
      <StyledPicture
        handIsOnMiddle={handIsOnMiddle}
        src={floatImage.url}
        alt={floatImage.alternativeText as string}
      />

      {technologies && <StyledHeading>{technologies}</StyledHeading>}
      {description && <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />}
      {images && (
        <StyledImageWrapper>
          {images.filter(isDefined).map(({ id, url, height, width, caption }) => (
            <Image
              key={id}
              src={{ src: url, height: height ?? 0, width: width ?? 0 }}
              alt={caption ?? ''}
            />
          ))}
        </StyledImageWrapper>
      )}
    </StyledCard>
  )
}

export default TechnologiesCard
