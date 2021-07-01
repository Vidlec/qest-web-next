import Line from 'components/Line'
import { useTranslation } from 'next-i18next'
import React from 'react'
import {
    Button,
    ClickText,
    Logo,
    PictureLogo,
    SlideStopWrapper,
    TextLogo,
    Wrapper,
    WrapperLogoTexts,
} from './styled'

const HomePage: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Wrapper>
            <WrapperLogoTexts>
                <TextLogo>{t('homepage.descriptionAboveLine')}</TextLogo>
                <TextLogo>{t('homepage.descriptionBellowLine')}</TextLogo>
            </WrapperLogoTexts>
            <Logo>
                <PictureLogo src={t('homepage.logo.url')} alt="qest logo" />
                <Line />
            </Logo>
            <SlideStopWrapper>
                <Button>8</Button>
                <ClickText href={'/'}>{t('homepage.clickToStop')}</ClickText>
            </SlideStopWrapper>
        </Wrapper>
    )
}

export default HomePage
