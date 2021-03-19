import styled from 'styled-components'

export const Wrapper = styled.div`
	a,
	span {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.colors.porcelainWhite};

		@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
			font-size: 0.9rem;
		}
	}
`

export const InactiveLanguage = styled.a`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.porcelainWhite};
	cursor: pointer;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 0.9rem;
	}
`

export const ActiveLanguage = styled(InactiveLanguage)`
	font-weight: bold;
`
