import React from 'react'
import { Card, Picture, Heading, Description, ImageWrapper } from './styled'
import { useTranslation } from 'react-i18next'
import { ComponentContentTechnologies, UploadFile } from 'gql/generated/types'

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
	const { t } = useTranslation()

	return (
		<Card>
			<Picture
				handIsOnMiddle={handIsOnMiddle}
				src={floatImage.url}
				alt={floatImage.alternativeText as string}
			/>

			{technologies && <Heading>{technologies}</Heading>}
			{description && (
				<Description
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
			{images && (
				<ImageWrapper>
					{images.map((image) => (
						<img
							key={image?.id}
							src={image?.url}
							alt={image?.url}
						/>
					))}
				</ImageWrapper>
			)}
		</Card>
	)
}

export default TechnologiesCard
