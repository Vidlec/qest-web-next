import styled from 'styled-components'

export const Wrapper = styled.form`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	position: relative;
	font-size: 1.4rem;
	padding-top: 30px;
	font-family: sourceCodeVariable;
	color: ${({ theme }) => theme.colors.yellow};
`

export const Label = styled.label`
	position: relative;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		justify-content: flex-start;
	}
`

export const LabelSpan = styled.span`
	margin: 0 0.8rem 0.8rem 0;
`

export const TextArea = styled.textarea`
	width: 100%;
	height: 256px;
	font-size: 1.4rem;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	border: none;
	padding: 1rem;
	margin: 0 0 2.6rem 0;
	resize: none;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		margin: 0 0 1.6rem 0;
	}
`

export const Input = styled.input<{ isValid?: boolean }>`
	width: 80%;
	font-size: 1.4rem;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	border: solid 2px ${({ isValid, theme }) => (isValid ? 'transparent' : theme.colors.red)};
	padding: 0.5rem 1rem;
	margin: 0 0 2.6rem 0;
	
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		margin: 0 2rem 2.6rem 0;
	}
`

export const Submit = styled.input`
	background-color: ${({ theme }) => theme.colors.yellow};
	padding: 0.6rem 7rem;
	margin: 0 0 2.6rem 0;
	font-size: 1.4rem;
	border: none;
`

export const Row = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		flex-direction: row;
	}
`
export const WarningMessage = styled.div`
	position: absolute;
	bottom: 0.3rem;
	left: 0;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.colors.red};
`
