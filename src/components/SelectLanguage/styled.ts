import styled from 'styled-components'

export const Wrapper = styled.div`
	a,
	span {
		@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
			font-size: 0.9rem;
		}
	}
`

export const InactiveLanguage = styled.a`
	cursor: pointer;
	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 0.9rem;
	}
`

export const ActiveLanguage = styled(InactiveLanguage)`
	font-weight: bold;
`
