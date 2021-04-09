import styled from 'styled-components'
import NextLink from 'next/link'

export const Link = styled(NextLink)`
	font-size: 1.5rem;
	:hover {
		filter: brightness(200%);
	}
`

export const AboutUs = styled(Link)`
	color: ${({ theme }) => theme.colors.aboutButton};
`

export const Reference = styled(Link)`
	color: ${({ theme }) => theme.colors.referenceButton};
`

export const Career = styled(Link)`
	color: ${({ theme }) => theme.colors.h3};
`

export const Contact = styled(Link)`
	color: ${({ theme }) => theme.colors.contactButton};
`

export const MainMenu = styled(Link)`
	color: ${({ theme }) => theme.colors.mainMenuButton};
`
