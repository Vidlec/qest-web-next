import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import Portal from 'components/Portal'
import { MENU_PORTAL_ID } from 'components/Constants'
import {
	MenuPanel,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Link,
	Icon,
} from './styled'

type Link = { url: string; link: React.ReactElement }

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()
	const router = useRouter()

	const links: Link[] = [
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

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen(true)
	}

	return (
		<MenuPanel>
			<Item>
				<NextLink href='/'>
					<Icon src={t('header.logo.url') as string} />
				</NextLink>
			</Item>
			<Item>
				<MenuButton onClick={handleOpen}>{t('menu.menu')}</MenuButton>
			</Item>
			{isOpen && (
				<Portal portalID={MENU_PORTAL_ID}>
					<MenuWrapper>
						<MenuCross onClick={handleClose}>🞨</MenuCross>
						{links.map((link) =>
							router.asPath !== link.url ? (
								<Link key={link.url}>{link.link}</Link>
							) : null
						)}
						<SelectLanguage />
					</MenuWrapper>
				</Portal>
			)}
		</MenuPanel>
	)
}

export default Header
