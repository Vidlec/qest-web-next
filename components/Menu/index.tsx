import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
	MenuPanel,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Link,
	Icon,
} from './styled'

const Menu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()
	const router = useRouter()

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
	}, [router.asPath])

	return (
		<MenuPanel>
			<Item>
				<Icon src={t('header.logo.url') as string} />
			</Item>
			<Item>
				<MenuButton onClick={() => setIsOpen(true)}>
					{t('menu.menu')}
				</MenuButton>
			</Item>
			{isOpen ? (
				<MenuWrapper>
					<MenuCross onClick={() => setIsOpen(false)}>🞨</MenuCross>
					{links.map((link) => {
						if (link.url !== router.pathname) {
							return <Link key={link.url}>{link.link}</Link>
						}
					})}
					<SelectLanguage />
				</MenuWrapper>
			) : null}
		</MenuPanel>
	)
}

export default Menu
