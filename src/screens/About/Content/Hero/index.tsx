import Line from 'components/Line'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { useTheme } from 'styled-components'
import useWindowSize from 'utils/hooks/useWindowSize'
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

const AboutHero: React.FC = () => {
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
          <PictureImg src={t('about.heroLogo.url')} alt={t('about.heroLogo.alternativeText')} />
        </LogoPicture>

        <Line />
      </LogoLineWrapper>

      {!isPhone && (
        <ArrowLinkWrapper>
          <ArrowLink offset={() => 170} href="#weAre">
            <ArrowDownIcon src={t('about.arrow.url')} alt={t('about.arrow.alternativeText')} />
            <span>{t('about.heroArrowTitle')}</span>
          </ArrowLink>
        </ArrowLinkWrapper>
      )}
    </HeroContainer>
  )
}

export default AboutHero
