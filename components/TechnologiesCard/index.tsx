import React from 'react'
import {
	StyledCard,
	StyledPicture,
	StyledHeading,
	StyledDescription,
	StyledImageWrapper,
} from './styled'
import { useTranslation } from 'react-i18next'
import { ComponentContentTechnologies, UploadFile } from 'gql/generated/types'

interface Props
	extends Omit<
		ComponentContentTechnologies,
		'id' | 'created_at' | 'updated_at'
	> {
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
	const { t } = useTranslation()

	return (
		<StyledCard>
			<StyledPicture
				handIsOnMiddle={handIsOnMiddle}
				src={floatImage.url}
				alt={floatImage.alternativeText as string}
			/>

			{technologies && <StyledHeading>{technologies}</StyledHeading>}
			{description && (
				<StyledDescription
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
			{images && (
				<StyledImageWrapper>
					{images.map((image) => (
						<img
							key={image?.id}
							src={image?.url}
							alt={image?.url}
						/>
					))}
				</StyledImageWrapper>
			)}
		</StyledCard>
	)
}

export default TechnologiesCard
