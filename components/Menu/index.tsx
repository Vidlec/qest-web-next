import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Portal from 'components/Portal'
import { MENU_PORTAL_ID } from 'components/Constants'
import theme from 'theme'
import {
	MenuPanel,
	HomePageMenuPanel,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Link,
	Icon,
} from './styled'

const Menu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null)
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

	const handleClose = () => {
		setIsOpen(false)
	}


	if (router.asPath === '/') {
		console.log(router.asPath)
		return !isDesktop ? (
			<HomePageMenuPanel>
				<Item>
					<Icon src={t('header.logo.url') as string} />
				</Item>
				<Item>
					<MenuButton onClick={() => setIsOpen(true)}>
						{t('menu.menu')}
					</MenuButton>
				</Item>
				{isOpen ? (
					<Portal portalID={MENU_PORTAL_ID}>
					<MenuWrapper>
						<MenuCross onClick={handleClose} >🞨</MenuCross>
						{links.map((link) => (
							<Link key={link.url}>{link.link}</Link>
						))}
					</MenuWrapper>
				</Portal>
				) : null}
			</HomePageMenuPanel>
		) : null
	}

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
				<Portal portalID={MENU_PORTAL_ID}>
					<MenuWrapper>
						<MenuCross onClick={handleClose} >🞨</MenuCross>
						{links.map((link) => (
							<Link key={link.url}>{link.link}</Link>
						))}
					</MenuWrapper>
				</Portal>
			) : null}
		</MenuPanel>
	)
}

export default Menu
