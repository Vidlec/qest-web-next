import styled from 'styled-components'

export const Line = styled.div`
	width: 100%;
	position: absolute;
	height: 0.15rem;
	left: 0;
	//margin-top: 0.25rem;
	background-color: ${({ theme }) => theme.colors.porcelainWhite};
	box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.porcelainWhite};

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		height: 0.25rem;
		margin-top: 0.45rem;
	}
`
