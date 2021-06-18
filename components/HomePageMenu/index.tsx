import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'

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

	return (
		<>
			<MenuSwitcher>
				<MenuButton onClick={() => setIsOpen(true)}>
					{t('menu.menu')}
				</MenuButton>
			</MenuSwitcher>
			<MenuWrapper isOpen={isOpen}>
				<MenuSwitcher>
					<MenuCross onClick={() => setIsOpen(false)}>
						🞨
					</MenuCross>
				</MenuSwitcher>
				<MenuList>
					<Item>
						<MainMenu>
							<NextLink href="/">{t('menu.homePage')}</NextLink>
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
							<NextLink href="/">{t('menu.reference')}</NextLink>
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
		</>
	)
}

export default HomePageMenu
