import styled from 'styled-components'

export const FormWrapper = styled.form`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	position: relative;
	font-size: 0.9em;
	margin-top: 30px;
	font-size: 20px;
	font-family: sourceCodeVariable;
`

export const FormLabelText = styled.label`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
	margin: 1rem 0 1rem 0;
`

export const FormLabelInput = styled.label`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	width: 100%;	
	padding: 0 0 1.6rem 0;
	margin: 1rem 0 1rem 0;
	position: relative;
`

export const FormLabelHeading = styled.span`
	font-size: .9em;
	color: ${({theme}) => theme.colors.yellow};
`

export const FormTextArea = styled.textarea`
	width: 100%;
	height: 256px;
	font-size: 1em;
	background-color: ${({ theme }) => theme.colors.black};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	padding: 1rem;
	margin: 1rem 0 0 0;
	resize: none;
`

export const FormInput = styled.input<{ isValid?: boolean }>`
	background-color: ${({ theme }) => theme.colors.black};
	border: solid 2px ${({ isValid, theme }) => (isValid === false ? theme.colors.red : 'transparent')};
	outline-color: 2px solid ${({isValid, theme}) => (isValid === false ? theme.colors.red: 'transparent')};
	color: ${({ theme }) => theme.colors.white};
	font-size: 1em;
	padding: 0.5rem 1rem;
	margin: 0 0 0 1.6rem;
	width: 80%;
	flex-shrink: 1;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		margin: 0 1.6rem 0 1.6rem;
		widht: 100%;
	}
`

export const FormSubmit = styled.input`
	background-color: ${({ theme }) => theme.colors.yellow};
	padding: 0.6rem 7rem;
	margin: 1rem 0 2.6rem 0;
	font-size: 1em;
	border: none;
`

export const FormRow = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		flex-direction: row;
	}
`

export const TopMargin = styled.div`
	margin-top: 10%;
`

export const WarningMessage = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;

	font-size: 1.2rem;

	color: ${({theme}) => (theme.colors.red)}
`
