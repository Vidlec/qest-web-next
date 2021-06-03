import styled from 'styled-components'

export const Link = styled.span`
	font-size: 1.5rem;
	:hover {
		filter: brightness(200%);
	}
`
export const AboutUs = styled(Link)`
	a {
		color: ${({ theme }) => theme.colors.aboutButton};
	}
`

export const Reference = styled(Link)`
	a {
		color: ${({ theme }) => theme.colors.referenceButton};
	}
`

export const Career = styled(Link)`
	a {
		color: ${({ theme }) => theme.colors.h3};
	}
`

export const Contact = styled(Link)`
	a {
		color: ${({ theme }) => theme.colors.contactButton};
	}
`

export const MainMenu = styled(Link)`
	a {
		color: ${({ theme }) => theme.colors.mainMenuButton};
	}
`
