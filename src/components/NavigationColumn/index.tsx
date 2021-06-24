import Link from 'components/Link'
import { MenuProps } from 'components/Menu'
import React, { useState } from 'react'
import { CloseButton, MenuButton, NavigationColumnContainer } from './styled'

// TODO: Fix these props, presumably by reworking these components
const NavigationColumn: React.FC<MenuProps> = ({
    menu,
    homePage,
    aboutUs,
    reference,
    contact,
    career,
}) => {
    const [open, setOpen] = useState(false)

    return (
        <NavigationColumnContainer>
            {!open ? (
                <MenuButton onClick={() => setOpen(true)}>{menu}</MenuButton>
            ) : (
                <>
                    <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
                    <Link href="/">{homePage}</Link>
                    <Link href="/">{aboutUs}</Link>
                    <Link href="/">{reference}</Link>
                    <Link href="/">{contact}</Link>
                    <Link href="/">{career}</Link>
                </>
            )}
        </NavigationColumnContainer>
    )
}

export default NavigationColumn
