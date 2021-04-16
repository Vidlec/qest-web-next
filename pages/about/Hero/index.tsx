import React from 'react'
import {
	ArrowDownIcon,
	ArrowLink,
	ArrowLinkWrapper,
	HeroContainer,
	HeroDescription,
	HeroHeadline,
	HeroLine,
	HeroLineWrapper,
	LogoLineWrapper,
	LogoPicture,
	PictureImg,
	SelectLanguageWrapper,
} from 'pages/about/styled'
import SelectLanguage from 'components/SelectLanguage'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

const AboutHero = () => {
	const { t } = useTranslation()

	return (
		<HeroContainer>
			<SelectLanguageWrapper>
				<SelectLanguage />
			</SelectLanguageWrapper>

			<HeroHeadline>
				<span>{t('about.heroHeadlineTop')}</span>
				<HeroLineWrapper>
					<HeroLine />
				</HeroLineWrapper>
				<span>{t('about.heroHeadlineBottom')}</span>
			</HeroHeadline>

			<HeroDescription
				dangerouslySetInnerHTML={{
					__html: t('about.heroDescription'),
				}}
			/>

			<LogoLineWrapper>
				<LogoPicture>
					<PictureImg
						src={t('about.heroLogo.url')}
						alt={t('about.heroLogo.alternativeText')}
					/>
				</LogoPicture>

				<Line />
			</LogoLineWrapper>

			<ArrowLinkWrapper>
				<ArrowLink href={'#'}>
					<ArrowDownIcon />
					<span>{t('about.heroArrowTitle')}</span>
				</ArrowLink>
			</ArrowLinkWrapper>
		</HeroContainer>
	)
}

export default AboutHero
