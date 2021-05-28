import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	Wrapper,
	Label,
	TextArea,
	Input,
	Submit,
	Row,
	LabelSpan,
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
		if ( !emailStatus.isValid ||  !nameStatus.isValid ) {
			return;
		}
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

	const handleNameBlur = () => {
		setNameStatus({ ...nameStatus, isTouched: true })
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setNameInput(value)
		setNameStatus({ ...nameStatus, isValid: Boolean(value) })
	}

	const shouldDisplayEmailError =
		!emailStatus.isValid && emailStatus.isTouched
	const emailError = emailInput
		? t('contact.formInvalidEmailWarning')
		: t('contact.formEmailWarning')
	const shouldDisplayNameError = !nameStatus.isValid && nameStatus.isTouched

	return (
		<Wrapper onSubmit={handleSubmit}>
			<Label htmlFor="textInput">
				<LabelSpan>{t('contact.formTextLabel')}</LabelSpan>
			</Label>
			<TextArea
				id="textInput"
				value={textAreaInput}
				onChange={handleTextChange}
			/>
			<Row>
				<Label>
					<LabelSpan>{t('contact.formNameLabel')}</LabelSpan>
					<Input
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
				</Label>
				<Label>
					<LabelSpan>{t('contact.formEmailLabel')}</LabelSpan>
					<Input
						type="text"
						value={emailInput}
						onChange={handleEmailChange}
						isValid={!shouldDisplayEmailError}
						onBlur={handleEmailBlur}
					/>
					{shouldDisplayEmailError ? (
						<WarningMessage>{emailError}</WarningMessage>
					) : null}
				</Label>
				<Submit
					type="submit"
					value={t('contact.formSubmit') as string}
					disabled={isSending}
				/>
			</Row>
		</Wrapper>
	)
}
