import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutUs, Contact, MainMenu, Reference, Career } from 'components/Link'
import SelectLanguage from '../SelectLanguage'
import {
	IntroItem,
	IntroMenuButton,
	IntroMenuCross,
	IntroMenuList,
	IntroMenuSwitcher,
	IntroMenuWrapper
} from './styled'
import {
	MenuPanel,
	Item,
	MenuWrapper,
	MenuButton,
	MenuCross,
	Link,
	Icon
} from './styled'

export const Menu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

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
					<Link>
						<MainMenu href="/">{t('menu.homePage')}</MainMenu>
					</Link>
					<Link>
						<AboutUs href="/about">{t('menu.aboutUs')}</AboutUs>
					</Link>
					<Link>
						<Career href="/career">{t('menu.career')}</Career>
					</Link>
					<Link>
						<Reference href="/">{t('menu.reference')}</Reference>
					</Link>
					<Link>
						<Contact href="/contacts">{t('menu.contact')}</Contact>
					</Link>
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
					<IntroMenuCross onClick={() => setIsOpen(false)}>🞨</IntroMenuCross>
				</IntroMenuSwitcher>
				<IntroMenuList>
					<IntroItem>
						<MainMenu href="/">{t('menu.homePage')}</MainMenu>
					</IntroItem>
					<IntroItem>
						<AboutUs href="/about">{t('menu.aboutUs')}</AboutUs>
					</IntroItem>
					<IntroItem>
						<SelectLanguage />
					</IntroItem>
					<IntroItem>
						<Reference href="/">{t('menu.reference')}</Reference>
					</IntroItem>
					<IntroItem>
						<Career href="/career">{t('menu.career')}</Career>
					</IntroItem>
					<IntroItem>
						<Contact href="/contacts">{t('menu.contact')}</Contact>
					</IntroItem>
				</IntroMenuList>
			</IntroMenuWrapper>
		</>
	)
}
