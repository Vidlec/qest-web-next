import React from 'react'
import useWindowSize from 'hooks/useWindowSize'
import { useTheme } from 'styled-components'
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
} from './styled'
import Line from 'components/Line'
import { useTranslation } from 'react-i18next'

const AboutHero = () => {
	const { mediaQueriesNumbers } = useTheme()
	const isPhone = useWindowSize(mediaQueriesNumbers.desktopSmall, 100)
	const { t } = useTranslation()

	return (
		<HeroContainer>
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

			{!isPhone && (
				<ArrowLinkWrapper>
					<ArrowLink offset={() => 170} href="#weAre">
						<ArrowDownIcon
							src={t('about.arrow.url')}
							alt={t('about.arrow.alternativeText')}
						/>
						<span>{t('about.heroArrowTitle')}</span>
					</ArrowLink>
				</ArrowLinkWrapper>
			)}
		</HeroContainer>
	)
}

export default AboutHero
