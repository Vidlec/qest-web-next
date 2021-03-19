import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import SelectLanguage from '../SelectLanguage'
import {
	AboutUs,
	Career,
	Contact,
	Item,
	MainMenu,
	MenuButton,
	MenuCross,
	MenuList,
	MenuSwitcher,
	Reference,
	Menu,
} from './styled'

const Navigation: React.FC = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<MenuSwitcher>
				<MenuButton onClick={() => setIsOpen(true)}>
					{t('menu.menu')}
				</MenuButton>
			</MenuSwitcher>
			<Menu isOpen={isOpen}>
				<MenuSwitcher>
					<MenuCross onClick={() => setIsOpen(false)}>🞨</MenuCross>
				</MenuSwitcher>
				<MenuList>
					<Item>
						<MainMenu href="/">{t('menu.homePage')}</MainMenu>
					</Item>
					<Item>
						<AboutUs href="/">{t('menu.aboutUs')}</AboutUs>
					</Item>
					<Item>
						<SelectLanguage />
					</Item>
					<Item>
						<Reference href="/">{t('menu.reference')}</Reference>
					</Item>
					<Item>
						<Career href="/">{t('menu.career')}</Career>
					</Item>
					<Item>
						<Contact href="/">{t('menu.contact')}</Contact>
					</Item>
				</MenuList>
			</Menu>
		</>
	)
}

export default Navigation
