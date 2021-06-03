import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import NextLink from 'next/link'
import { Router } from 'next/dist/client/router'
import {
	IntroItem,
	IntroMenuButton,
	IntroMenuCross,
	IntroMenuList,
	IntroMenuSwitcher,
	IntroMenuWrapper,
} from './styled'
import {
	MenuPanel,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Link,
	Icon,
} from './styled'

export const Menu: React.FC<{ router: Router }> = ({ router }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	const links: { url: string; link: React.ReactElement }[] = [
		{
			url: '/homepage',
			link: (
				<MainMenu>
					<NextLink href="/">{t('menu.homePage')}</NextLink>
				</MainMenu>
			),
		},
		{
			url: '/about',
			link: (
				<AboutUs>
					<NextLink href="/about">{t('menu.aboutUs')}</NextLink>
				</AboutUs>
			),
		},
		{
			url: '/career',
			link: (
				<Career>
					<NextLink href="/career">{t('menu.career')}</NextLink>
				</Career>
			),
		},
		{
			url: '/reference',
			link: (
				<Reference>
					<NextLink href="/">{t('menu.reference')}</NextLink>
				</Reference>
			),
		},
		{
			url: '/contacts',
			link: (
				<Contact>
					<NextLink href="/contacts">{t('menu.contact')}</NextLink>
				</Contact>
			),
		},
	]

	useEffect(() => {
		setIsOpen(false)
	}, [router.pathname])

	return (
		<MenuPanel>
			<Item>
				<Icon src={t('header.logo.url') as string} />
			</Item>
			<Item>
				<SelectLanguage />
			</Item>
			<Item>
				<MenuButton onClick={() => setIsOpen(true)}>menu</MenuButton>
			</Item>
			{isOpen ? (
				<MenuWrapper>
					<MenuCross onClick={() => setIsOpen(false)}>🞨</MenuCross>
					{links.map((link) => {
						if (link.url !== router.pathname) {
							return <Link key={link.url}>{link.link}</Link>
						}
					})}
				</MenuWrapper>
			) : null}
		</MenuPanel>
	)
}

export const Navigation: React.FC = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<IntroMenuSwitcher>
				<IntroMenuButton onClick={() => setIsOpen(true)}>
					{t('menu.menu')}
				</IntroMenuButton>
			</IntroMenuSwitcher>
			<IntroMenuWrapper isOpen={isOpen}>
				<IntroMenuSwitcher>
					<IntroMenuCross onClick={() => setIsOpen(false)}>
						🞨
					</IntroMenuCross>
				</IntroMenuSwitcher>
				<IntroMenuList>
					<IntroItem>
						<MainMenu>
							<NextLink href="/">{t('menu.homePage')}</NextLink>
						</MainMenu>
					</IntroItem>
					<IntroItem>
						<AboutUs>
							<NextLink href="/about">
								{t('menu.aboutUs')}
							</NextLink>
						</AboutUs>
					</IntroItem>
					<IntroItem>
						<SelectLanguage />
					</IntroItem>
					<IntroItem>
						<Reference>
							<NextLink href="/">{t('menu.reference')}</NextLink>
						</Reference>
					</IntroItem>
					<IntroItem>
						<Career>
							<NextLink href="/career">
								{t('menu.career')}
							</NextLink>
						</Career>
					</IntroItem>
					<IntroItem>
						<Contact>
							<NextLink href="/contacts">
								{t('menu.contact')}
							</NextLink>
						</Contact>
					</IntroItem>
				</IntroMenuList>
			</IntroMenuWrapper>
		</>
	)
}
