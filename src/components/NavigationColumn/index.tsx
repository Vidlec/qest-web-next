import Link from 'components/Link'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import { CloseButton, MenuButton, NavigationColumnContainer } from './styled'

const NavigationColumn: React.FC = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <NavigationColumnContainer>
            {!open ? (
                <MenuButton onClick={() => setOpen(true)}>{t('menu.menu')}</MenuButton>
            ) : (
                <>
                    <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
                    <Link color="blue" href="/">
                        {t('menu.homePage')}
                    </Link>
                    <Link color="red" href="/">
                        {t('menu.aboutUs')}
                    </Link>
                    <Link color="green" href="/">
                        {t('menu.reference')}
                    </Link>
                    <Link color="yellow" href="/">
                        {t('menu.contact')}
                    </Link>
                    <Link color="pink" href="/">
                        {t('menu.career')}
                    </Link>
                </>
            )}
        </NavigationColumnContainer>
    )
}

export default NavigationColumn
