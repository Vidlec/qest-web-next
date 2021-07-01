import Link, { LinkColor } from 'components/Link'
import Portal from 'components/Portal'
import { MENU_PORTAL_ID } from 'constants/layout'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HeaderWrapper, Icon, Item, Language, MenuButton, MenuCross, MenuWrapper } from './styled'

type LinkType = { url: string; link: React.ReactElement; color?: LinkColor }

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const router = useRouter()

  const links: LinkType[] = [
    {
      url: '/',
      link: t('common:linksLabels.homePage'),
      color: 'red',
    },
    {
      url: '/about',
      link: t('common:linksLabels.aboutUs'),
      color: 'blue',
    },
    {
      url: '/career',
      link: t('common:linksLabels.career'),
      color: 'yellow',
    },
    {
      url: '/reference',
      link: t('common:linksLabels.reference'),
      color: 'pink',
    },
    {
      url: '/contacts',
      link: t('common:linksLabels.contact'),
      color: 'green',
    },
  ]

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  return (
    <HeaderWrapper>
      <Item>
        <NextLink href="/">
          <Icon src={t('header.logo.url') as string} />
        </NextLink>
      </Item>
      <Item>
        <MenuButton onClick={handleOpen}>{t('menu.menu')}</MenuButton>
      </Item>
      {isOpen && (
        <Portal portalID={MENU_PORTAL_ID}>
          <MenuWrapper>
            <MenuCross onClick={handleClose}>x</MenuCross>
            {links.map(
              (link) =>
                router.asPath !== link.url && (
                  <Link key={link.url} href={link.url} color={link.color}>
                    {link.link}
                  </Link>
                )
            )}
            <Language />
          </MenuWrapper>
        </Portal>
      )}
    </HeaderWrapper>
  )
}

export default Header
