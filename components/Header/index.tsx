import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import Portal from 'components/Portal'
import { MENU_PORTAL_ID } from 'components/Constants'
import Link, { LinkColor } from 'components/Link'
import {
	HeaderWrapper,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Icon,
	Language,
} from './styled'

type Link = { url: string; link: React.ReactElement; color?: LinkColor }

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()
	const router = useRouter()

	const links: Link[] = [
		{
			url: '/',
			link: t('menu.homePage'),
			color: 'red',
		},
		{
			url: '/about',
			link: t('menu.aboutUs'),
			color: 'blue',
		},
		{
			url: '/career',
			link: t('menu.career'),
			color: 'yellow',
		},
		{
			url: '/reference',
			link: t('menu.reference'),
			color: 'pink',
		},
		{
			url: '/contacts',
			link: t('menu.contact'),
			color: 'green',
		},
	]

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleOpen = () => {
		setIsOpen(true)
	}

	return (
		<HeaderWrapper>
			<Item>
				<NextLink href="/">
					<Icon src={t('header.logo.url') as string} />
				</NextLink>
			</Item>
			<Item>
				<MenuButton onClick={handleOpen}>{t('menu.menu')}</MenuButton>
			</Item>
			{isOpen && (
				<Portal portalID={MENU_PORTAL_ID}>
					<MenuWrapper>
						<MenuCross onClick={handleClose}>x</MenuCross>
						{links.map(
							(link) =>
								router.asPath !== link.url && (
									<Link
										key={link.url}
										href={link.url}
										color={link.color}
									>
										{link.link}
									</Link>
								)
						)}
						<Language />
					</MenuWrapper>
				</Portal>
			)}
		</HeaderWrapper>
	)
}

export default Header
