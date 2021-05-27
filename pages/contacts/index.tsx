import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'

import {
	FormWrapper,
	FormLabelInput,
	FormLabelText,
	FormTextArea,
	FormInput,
	FormSubmit,
	FormRow,
	FormLabelHeading,
	WarningMessage,
} from 'components/Form/styled'

import Portal from 'components/Portal'

const Contacts: React.FC = () => {
	const [textAreaInput, setTextAreaInput] = useState('')
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [emailIsValid, setEmailIsValid] = useState<boolean>()
	const [nameIsValid, setNameIsValid] = useState<boolean>()

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
		if (!isNameValid(nameInput)) {
			setNameIsValid(false);
			return
		} else if (!isEmailValid(emailInput)) {
			setEmailIsValid(false);
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

	const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaInput(e.target.value)
	}

	const isEmailValid = (email: string) => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	const isNameValid = (name: string) => {
		return name !== ''
	}

	const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailInput(e.target.value)
		if (emailIsValid !== undefined) {
			setEmailIsValid(isEmailValid(e.target.value))
		}
	}

	const handleIsEmailValid = () => {
		if (emailIsValid === undefined) {
			setEmailIsValid(isEmailValid(emailInput))
		}
	}

	const handleIsNameValid = () => {
		if (nameIsValid === undefined) {
			setNameIsValid(isNameValid(nameInput))
		}
	}

	const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (nameIsValid !== undefined) {
			setNameIsValid(isNameValid(e.target.value))
		}
		setNameInput(e.target.value)
	}

	return (
		<>
			<Portal portalID="footer">
				<FormWrapper onSubmit={handleSubmit}>
					<FormLabelText>
						<FormLabelHeading>
							{t('contact.FormText')}
						</FormLabelHeading>
						<FormTextArea
							value={textAreaInput}
							onChange={handleTextInput}
						/>
					</FormLabelText>
					<FormRow>
						<FormLabelInput>
							<FormLabelHeading>
								{t('contact.FormName')}
							</FormLabelHeading>
							<FormInput
								type="text"
								value={nameInput}
								onChange={handleNameInput}
								isValid={nameIsValid}
								onBlur={handleIsNameValid}
							/>
							{nameIsValid === false ? (
								<WarningMessage>
									{t('contact.formNameWarning')}
								</WarningMessage>
							) : null}
						</FormLabelInput>
						<FormLabelInput>
							<FormLabelHeading>
								{t('contact.FormEmail')}
							</FormLabelHeading>
							<FormInput
								type="text"
								value={emailInput}
								onChange={handleEmailInput}
								isValid={emailIsValid}
								onBlur={handleIsEmailValid}
							/>
							{emailIsValid === false ? (
								<WarningMessage>
									{t('contact.formEmailWarning')}
								</WarningMessage>
							) : null}
						</FormLabelInput>
						<FormSubmit
							type="submit"
							value="ODESLAT"
							disabled={isSending}
						/>
					</FormRow>
				</FormWrapper>
			</Portal>
		</>
	)
}

export default Contacts
