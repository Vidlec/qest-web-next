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
        <TextLogo>{t('homePage:descriptionAboveLine')}</TextLogo>
        <TextLogo>{t('homePage:descriptionBellowLine')}</TextLogo>
      </WrapperLogoTexts>
      <Logo>
        {/** TODO: Use static image */}
        <PictureLogo src={t('homePage:logo.url')} alt="qest logo" />
        <Line />
      </Logo>
      <SlideStopWrapper>
        <Button>8</Button>
        <ClickText href={'/'}>{t('homePage:clickToStopText')}</ClickText>
      </SlideStopWrapper>
    </Wrapper>
  )
}

export default HomePage
