import React from 'react'
import { useTranslation } from 'react-i18next'

import { CaseStudy as CaseStudyType } from 'gql/generated/types'
import {
	Description,
	ContentPicture,
	ContentText,
	Line,
	Title,
	About,
	Subtitle,
	Wrapper,
	WrapperWithPicture,
} from './styled'

const CaseStudy: React.FC<Partial<CaseStudyType>> = ({
	title,
	subtitle,
	about,
	industry,
	client,
	system,
	mainImage,
}) => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<WrapperWithPicture>
				<ContentText>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
					<About>{about}</About>
				</ContentText>
				<Description>
					<Line></Line>
					<section>
						<span>{t('caseStudy.industry')}</span>
						<p>{industry}</p>
					</section>
					<section>
						<span>{t('caseStudy.client')}</span>
						<p>{client}</p>
					</section>
					<section>
						<span>{t('caseStudy.system')}</span>
						<p>{system}</p>
					</section>
				</Description>
				<ContentPicture>
					<img src={mainImage?.url} alt={title} />
				</ContentPicture>
			</WrapperWithPicture>
		</Wrapper>
	)
}

export default CaseStudy
