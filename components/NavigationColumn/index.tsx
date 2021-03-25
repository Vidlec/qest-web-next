import { MainMenu, Reference, Contact, Career, AboutUs } from 'components/Link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavigationColumnContainer, MenuButton, CloseButton } from './styled'

const NavigationColumn = () => {
	const { t } = useTranslation()
	const [open, setOpen] = useState(false)

	return (
		<NavigationColumnContainer>
			{!open ? (
				<MenuButton onClick={() => setOpen(true)}>
					{t('menu.menu')}
				</MenuButton>
			) : (
				<>
					<CloseButton onClick={() => setOpen(false)}>X</CloseButton>
					<MainMenu href="/">{t('menu.homePage')}</MainMenu>
					<AboutUs href="/">{t('menu.aboutUs')}</AboutUs>
					<Reference href="/">{t('menu.reference')}</Reference>
					<Career href="/">{t('menu.contact')}</Career>
					<Contact href="/">{t('menu.career')}</Contact>
				</>
			)}
		</NavigationColumnContainer>
	)
}

export default NavigationColumn
