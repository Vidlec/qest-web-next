import Link from 'components/Link'
import Portal from 'components/Portal'
import SelectLanguage from 'components/SelectLanguage'
import { MENU_PORTAL_ID } from 'constants/layout'
import { useTranslation } from 'next-i18next'
import * as React from 'react'
import { Item } from './styled'

const DesktopHeader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Portal portalID={MENU_PORTAL_ID}>
      <Item position="topLeft">
        <Link href="/about" color="blue">
          {t('common:linksLabels.aboutUs')}
        </Link>
      </Item>
      <Item position="topMiddle">
        <SelectLanguage />
      </Item>
      <Item position="topRight">
        <Link href="/" color="pink">
          {t('common:linksLabels.reference')}
        </Link>
      </Item>
      <Item position="bottomLeft">
        <Link href="/career" color="yellow">
          {t('common:linksLabels.career')}
        </Link>
      </Item>
      <Item position="bottomRight">
        <Link href="/contacts" color="green">
          {t('common:linksLabels.contact')}
        </Link>
      </Item>
    </Portal>
  )
}

export default DesktopHeader
