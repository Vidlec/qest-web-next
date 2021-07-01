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
} from 'components/About/styled'
import Line from 'components/Line'
import { useTranslation } from 'next-i18next'
import React from 'react'

const AboutHero = () => {
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

            <ArrowLinkWrapper>
                <ArrowLink href={'#'}>
                    <ArrowDownIcon
                        src={t('about.arrow.url')}
                        alt={t('about.arrow.alternativeText')}
                    />
                    <span>{t('about.heroArrowTitle')}</span>
                </ArrowLink>
            </ArrowLinkWrapper>
        </HeroContainer>
    )
}

export default AboutHero
