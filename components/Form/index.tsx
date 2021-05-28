import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	FormWrapper,
	FormLabel,
	FormTextArea,
	FormInput,
	FormSubmit,
	FormRow,
	FormLabelSpan,
	WarningMessage,
} from './styled'

export const Form: React.FC = () => {
	const [textAreaInput, setTextAreaInput] = useState('')
	const [nameInput, setNameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [isSending, setIsSending] = useState(false)
	const [emailStatus, setEmailStatus] = useState({
		isTouched: false,
		isValid: false,
	})
	const [nameStatus, setNameStatus] = useState({
		isTouched: false,
		isValid: false,
	})

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

		setIsSending(true)
		try {
			await fakeSubmit()
			setIsSending(false)
		} catch (error) {
			setIsSending(false)
		}
	}

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaInput(e.target.value)
	}

	const isEmailValid = (email: string) => {
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return emailRegex.test(email)
	}

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setEmailInput(value)
		setEmailStatus({ ...emailStatus, isValid: isEmailValid(value) })
	}

	const handleEmailBlur = () => {
		setEmailStatus({ ...emailStatus, isTouched: true })
	}

	const isNameValid = (name: string) => {
		return name !== ''
	}

	const handleNameBlur = () => {
		setNameStatus({ ...nameStatus, isTouched: true })
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setNameInput(value)
		setNameStatus({ ...nameStatus, isValid: isNameValid(value) })
	}

	const shouldDisplayEmailError =
		!emailStatus.isValid && emailStatus.isTouched
	const emailError = emailInput
		? t('contact.formInvalidEmailWarning')
		: t('contact.formEmailWarning')
	const shouldDisplayNameError = !nameStatus.isValid && nameStatus.isTouched
	const submitValue = t('contact.formSubmit')

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<FormLabel htmlFor="textInput">
				<FormLabelSpan>{t('contact.FormText')}</FormLabelSpan>
			</FormLabel>
			<FormTextArea
				id="textInput"
				value={textAreaInput}
				onChange={handleTextChange}
			/>
			<FormRow>
				<FormLabel>
					<FormLabelSpan>{t('contact.FormName')}</FormLabelSpan>
					<FormInput
						type="text"
						value={nameInput}
						onChange={handleNameChange}
						isValid={!shouldDisplayNameError}
						onBlur={handleNameBlur}
					/>
					{shouldDisplayNameError ? (
						<WarningMessage>
							{t('contact.formNameWarning')}
						</WarningMessage>
					) : null}
				</FormLabel>
				<FormLabel>
					<FormLabelSpan>{t('contact.FormEmail')}</FormLabelSpan>
					<FormInput
						type="text"
						value={emailInput}
						onChange={handleEmailChange}
						isValid={!shouldDisplayEmailError}
						onBlur={handleEmailBlur}
					/>
					{shouldDisplayEmailError ? (
						<WarningMessage>{emailError}</WarningMessage>
					) : null}
				</FormLabel>
				<FormSubmit
					type="submit"
					value={submitValue}
					disabled={isSending}
				/>
			</FormRow>
		</FormWrapper>
	)
}
