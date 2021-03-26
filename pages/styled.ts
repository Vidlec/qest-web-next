import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const WrapperContent = styled.div`
	display: flex;
	width: 85%;
	flex-direction: column;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 71.25rem;
	}
`
