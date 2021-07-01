import styled from 'styled-components'
import Paragraph from 'components/Paragraph'

export const StyledSubTitle = styled.h2`
	text-transform: uppercase;
`

export const StyledContent = styled.div`
	font-size: ${({ theme }) => theme.sizes.extraSmall};
	margin: 0 0 1rem 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		font-size: ${({ theme }) => theme.sizes.body};
	}
`

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.colors.green};
	padding: 0 0.5rem 0.1rem 0;
	height: 35px;
	display: inline-block;
	border-bottom: solid 0.13rem;
`

export const StyledTechnologies = styled(Paragraph)`
	color: ${({ theme }) => theme.colors.green};
`

export const StyledList = styled.ul`
	list-style: none;
	padding-left: 0;

	li::before {
		content: '·';
		padding-right: 0.65rem;
		color: ${({ theme }) => theme.colors.green};
	}
`

export const StyledBlock = styled.div`
	padding-bottom: 1.4rem;
`
