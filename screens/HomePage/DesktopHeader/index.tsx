import * as React from 'react'
import Link from 'components/Link'
import SelectLanguage from 'components/SelectLanguage'
import { useTranslation } from 'react-i18next'
import { Item } from './styled'
import Portal from 'components/Portal'
import { MENU_PORTAL_ID } from 'components/Constants'

const DesktopHeader = () => {
	const { t } = useTranslation()

	return (
		<Portal portalID={MENU_PORTAL_ID}>
			<Item position="topLeft">
				<Link href="/about" color="blue">
					{t('menu.aboutUs')}
				</Link>
			</Item>
			<Item position="topMiddle">
				<SelectLanguage />
			</Item>
			<Item position="topRight">
				<Link href="/" color="pink">
					{t('menu.reference')}
				</Link>
			</Item>
			<Item position="bottomLeft">
				<Link href="/career" color="yellow">
					{t('menu.career')}
				</Link>
			</Item>
			<Item position="bottomRight">
				<Link href="/contacts" color="green">
					{t('menu.contact')}
				</Link>
			</Item>
		</Portal>
	)
}

export default DesktopHeader
