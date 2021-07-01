import { ComponentContentTechnologies, UploadFile } from 'gql/generated/types'
import React from 'react'
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
          {images.map((img) => (
            <img key={img?.id} src={img?.url} alt={img?.caption ?? ''} />
          ))}
        </StyledImageWrapper>
      )}
    </StyledCard>
  )
}

export default TechnologiesCard
