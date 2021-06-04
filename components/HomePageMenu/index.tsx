import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NextLink from 'next/link'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'

import {
	IntroItem,
	IntroMenuButton,
	IntroMenuCross,
	IntroMenuList,
	IntroMenuSwitcher,
	IntroMenuWrapper,
} from './styled'

export const HomePageMenu: React.FC = () => {
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

export default HomePageMenu
