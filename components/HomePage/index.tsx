import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from 'components/SelectLanguage'
import theme from 'theme'
import {
	Wrapper,
	Button,
	ClickText,
	Logo,
	PictureLogo,
	SlideStopWrapper,
	TextLogo,
	WrapperLogoTexts,
	MenuWrapper,
	MenuList,
	Item,
} from './styled'
import Line from 'components/Line'

const HomePage: React.FC = () => {
	const { t } = useTranslation()
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

	useEffect(() => {
		if (isDesktop === null) {
			setIsDesktop(window.innerWidth > theme.mediaQueriesNumbers.ipad)
		}

		const handleResize = () => {
			setIsDesktop(window.innerWidth > theme.mediaQueriesNumbers.ipad)
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Wrapper>
			{isDesktop ? (
				<MenuWrapper>
					<MenuList>
						<Item>
							<MainMenu>
								<NextLink href="/">
									{t('menu.homePage')}
								</NextLink>
							</MainMenu>
						</Item>
						<Item>
							<AboutUs>
								<NextLink href="/about">
									{t('menu.aboutUs')}
								</NextLink>
							</AboutUs>
						</Item>
						<Item>
							<SelectLanguage />
						</Item>
						<Item>
							<Reference>
								<NextLink href="/">
									{t('menu.reference')}
								</NextLink>
							</Reference>
						</Item>
						<Item>
							<Career>
								<NextLink href="/career">
									{t('menu.career')}
								</NextLink>
							</Career>
						</Item>
						<Item>
							<Contact>
								<NextLink href="/contacts">
									{t('menu.contact')}
								</NextLink>
							</Contact>
						</Item>
					</MenuList>
				</MenuWrapper>
			) : null}

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
