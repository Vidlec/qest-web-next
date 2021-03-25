import styled from 'styled-components'

export const Link = styled.a`
	font-size: 1.5rem;
	text-decoration: none;
`

export const AboutUs = styled(Link)`
	color: ${({ theme }) => theme.colors.poolBlue};
`

export const Reference = styled(Link)`
	color: ${({ theme }) => theme.colors.orchidPink};
`

export const Career = styled(Link)`
	color: ${({ theme }) => theme.colors.merigoldOrange};
`

export const Contact = styled(Link)`
	color: ${({ theme }) => theme.colors.mintGreen};
`

export const MainMenu = styled(Link)`
	color: ${({ theme }) => theme.colors.roseRed};
`
