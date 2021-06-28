import React from 'react'
import { useTranslation } from 'react-i18next'
import {
	Wrapper,
	Button,
	ClickText,
	Logo,
	PictureLogo,
	SlideStopWrapper,
	TextLogo,
	WrapperLogoTexts,
} from './styled'
import Line from 'components/Line'

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
