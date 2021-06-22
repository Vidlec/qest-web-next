import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
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

interface ContentProps {
	isOpen: boolean
	handleOpen: () => void
	handleClose: () => void
	links: Link[]
}

type Link = { url: string; link: React.ReactElement }

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isPhone, setIsPhone] = useState<boolean>(false)
	const { t } = useTranslation()
	const router = useRouter()
	const isDesktopQuery = useMediaQuery({
		query: `(max-device-width: ${theme.mediaQueriesNumbers.ipad - 1}px)`,
	})

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

	useEffect(() => {
		setIsOpen(false)
	}, [router.asPath])

	useEffect(() => {
		setIsPhone(isDesktopQuery)
	}, [isDesktopQuery])

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen(true)
	}

	if (router.asPath === '/') {
		return isPhone? (
			<HomePageMenuPanel>
				<Content
					isOpen={isOpen}
					handleOpen={handleOpen}
					handleClose={handleClose}
					links={links}
				/>
			</HomePageMenuPanel>
		) : null
	}

	return (
		<MenuPanel>
			<Content
				isOpen={isOpen}
				handleOpen={handleOpen}
				handleClose={handleClose}
				links={links}
			/>
		</MenuPanel>
	)
}

const Content: React.FC<ContentProps> = ({
	isOpen,
	handleOpen,
	handleClose,
	links,
}) => {
	const { t } = useTranslation()
	const router = useRouter()
	return (
		<>
			<Item>
				<Icon src={t('header.logo.url') as string} />
			</Item>
			<Item>
				<MenuButton onClick={handleOpen}>{t('menu.menu')}</MenuButton>
			</Item>
			{isOpen ? (
				<Portal portalID={MENU_PORTAL_ID}>
					<MenuWrapper>
						<MenuCross onClick={handleClose}>🞨</MenuCross>
						{links.map((link) => (
							router.asPath !== link.url? <Link key={link.url}>{link.link}</Link>: null
						))}
						<SelectLanguage />
					</MenuWrapper>
				</Portal>
			) : null}
		</>
	)
}

export default Header
