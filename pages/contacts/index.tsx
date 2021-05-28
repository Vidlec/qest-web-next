import React from 'react'
import Portal from 'components/Portal'
import { Form } from 'components/Form'
import { FOOTER_PORTAL_ID } from 'components/Constants'

const Contacts: React.FC = () => {
	return (
		<Portal portalID={FOOTER_PORTAL_ID}>
			<Form />
		</Portal>
	)
}

export default Contacts
