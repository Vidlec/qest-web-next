import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import Container from 'components/Container'
import Footer from 'components/Footer'
import {
	FormWrapper,
	FormLabel,
	FormTextArea,
	FormInput,
	FormSubmit,
	FormRow,
	TopMargin,
} from 'components/Form/styled'

// TODO: Add Formular and Header
const Contacts: React.FC = () => {
	const [textAreaInput, setTextAreaInput] = useState('')
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [emailStatus, setEmailStaus] = useState<boolean>()

	const { t } = useTranslation()

	const fakeSubmit = () => {
		return new Promise((res) => {
			setTimeout(() => {
				res('')
			}, 3000)
		})
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		if (
			nameInput === '' ||
			emailInput === '' ||
			textAreaInput === '' ||
			isEmailInvalid(emailInput)
		) {
			return
		}
		setIsSending(true)
		try {
			await fakeSubmit()
			setIsSending(false)
		} catch (error) {
			setIsSending(false)
		}
	}

	const isEmailInvalid = (email: string) => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return !re.test(email)
	}

	const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailInput(e.target.value)
		if (emailStatus !== undefined) {
			setEmailStaus(isEmailInvalid(e.target.value))
		}
	}

	const handleIsValid = () => {
		if (emailStatus === undefined) {
			setEmailStaus(isEmailInvalid(emailInput))
		}
	}

	const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaInput(e.target.value)
	}

	const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameInput(e.target.value)
	}

	return (
		<>
			<TopMargin>
				<Footer />
			</TopMargin>

			<Container>
				<FormWrapper onSubmit={handleSubmit}>
					<FormLabel>
						{t('contact.FormText')}
						<FormTextArea
							value={textAreaInput}
							onChange={handleTextInput}
						/>
					</FormLabel>
					<FormRow>
						<FormLabel>
							{t('contact.FormName')}
							<FormInput
								type="text"
								value={nameInput}
								onChange={handleNameInput}
								required={false}
							/>
						</FormLabel>
						<FormLabel>
							{t('contact.FormEmail')}
							<FormInput
								type="text"
								value={emailInput}
								onChange={handleEmailInput}
								required={true}
								isInValid={emailStatus}
								onBlur={handleIsValid}
							/>
						</FormLabel>
						<FormSubmit
							type="submit"
							value="ODESLAT"
							disabled={isSending}
						/>
					</FormRow>
				</FormWrapper>
			</Container>
		</>
	)
}

export default Contacts
