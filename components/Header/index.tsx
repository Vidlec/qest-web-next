import NavigationColumn from 'components/NavigationColumn'
import SelectLanguage from 'components/SelectLanguage'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderContainer, LanguageSwitcherWrapper, Logo } from './styled'

const Header = () => {
	const { t } = useTranslation()

	return (
		<HeaderContainer>
			<Logo src={t('header.logo.url')} />
			<LanguageSwitcherWrapper>
				<SelectLanguage />
			</LanguageSwitcherWrapper>
			<NavigationColumn />
		</HeaderContainer>
	)
}

export default Header
