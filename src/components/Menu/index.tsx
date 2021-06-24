import Link from 'components/Link'
import { LanguagesQuery } from 'gql/generated/types'
import React, { useState } from 'react'
import SelectLanguage from '../SelectLanguage'
import { Item, Menu, MenuButton, MenuCross, MenuList, MenuSwitcher } from './styled'

export interface MenuProps {
    menu: string
    homePage: string
    aboutUs: string
    reference: string
    career: string
    contact: string
    languages: LanguagesQuery['languages']
}

const Navigation: React.FC<MenuProps> = ({
    menu,
    homePage,
    aboutUs,
    reference,
    career,
    contact,
    languages,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <MenuSwitcher>
                <MenuButton onClick={() => setIsOpen(true)}>{menu}</MenuButton>
            </MenuSwitcher>
            <Menu isOpen={isOpen}>
                <MenuSwitcher>
                    <MenuCross onClick={() => setIsOpen(false)}>🞨</MenuCross>
                </MenuSwitcher>
                <MenuList>
                    <Item>
                        <Link href="/">{homePage}</Link>
                    </Item>
                    <Item>
                        <Link href="/about">{aboutUs}</Link>
                    </Item>
                    <Item>
                        <SelectLanguage languages={languages} />
                    </Item>
                    <Item>
                        <Link href="/">{reference}</Link>
                    </Item>
                    <Item>
                        <Link href="/">{career}</Link>
                    </Item>
                    <Item>
                        <Link href="/contacts">{contact}</Link>
                    </Item>
                </MenuList>
            </Menu>
        </>
    )
}

export default Navigation
