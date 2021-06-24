import { MenuProps } from 'components/Menu'
import NavigationColumn from 'components/NavigationColumn'
import SelectLanguage from 'components/SelectLanguage'
import { LanguagesQuery } from 'gql/generated/types'
import * as React from 'react'
import { HeaderContainer, LanguageSwitcherWrapper, Logo } from './styled'

interface Props {
    logo: {
        url: string
    }
    languages: LanguagesQuery['languages']
}

export const dummyMenu: MenuProps = {
    career: 'Kariéra',
    aboutUs: 'O nás',
    contact: 'Kontakt',
    homePage: 'Home',
    menu: 'Menu',
    reference: 'Reference',
    languages: [
        { id: '1', languageCode: 'cs', displayName: 'CS' },
        { id: '2', languageCode: 'en', displayName: 'EN' },
    ],
}

const Header: React.FC<Props> = ({ logo, languages }) => {
    return (
        <HeaderContainer>
            <Logo src={logo.url} />
            <LanguageSwitcherWrapper>
                <SelectLanguage languages={languages} />
            </LanguageSwitcherWrapper>
            <NavigationColumn {...dummyMenu} />
        </HeaderContainer>
    )
}

export default Header
