import NavigationColumn from 'components/NavigationColumn'
import SelectLanguage from 'components/SelectLanguage'
import React from 'react'
import { HeaderContainer, LanguageSwitcherWrapper, Logo } from './styled'

const Header = () => (
	<HeaderContainer>
		<Logo src="/assets/logos/Botanical_negative.png" />
		<LanguageSwitcherWrapper>
			<SelectLanguage />
		</LanguageSwitcherWrapper>
		<NavigationColumn />
	</HeaderContainer>
)

export default Header
