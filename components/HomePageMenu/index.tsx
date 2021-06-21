import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import theme from 'theme'

import {
	Item,
	MenuButton,
	MenuCross,
	MenuList,
	MenuSwitcher,
	MenuWrapper,
} from './styled'

export const HomePageMenu: React.FC = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [width, setWidth] = useState<boolean | null>(null)

	useEffect(() => {
		if (!width) {
			setWidth(window.innerWidth > theme.mediaQueriesNumbers.ipad)
		}

		const handleResize = () => {
			setWidth(window.innerWidth > theme.mediaQueriesNumbers.ipad)
		}

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<>
			<MenuSwitcher>
				<MenuButton onClick={() => setIsOpen(true)}>
					{t('menu.menu')}
				</MenuButton>
			</MenuSwitcher>
			{isOpen || width ? (
				<MenuWrapper>
					<MenuSwitcher>
						<MenuCross onClick={() => setIsOpen(false)}>
							🞨
						</MenuCross>
					</MenuSwitcher>
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
		</>
	)
}

export default HomePageMenu
