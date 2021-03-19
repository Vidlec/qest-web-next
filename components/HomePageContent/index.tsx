import React from 'react'
import { useTranslation } from 'react-i18next'

import {
	Button,
	ClickText,
	Line,
	Logo,
	PictureLogo,
	SlideStopWrapper,
	TextLogo,
	WrapperLogoTexts,
} from './styled'

const HomePageContent: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
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
		</>
	)
}

export default HomePageContent
