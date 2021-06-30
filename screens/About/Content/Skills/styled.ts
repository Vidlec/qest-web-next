import styled from 'styled-components'

export const SkillsListItem = styled.li``
export const SkillHeadline = styled.h2`
	margin: 0;
	line-height: 1;
	font-size: ${({ theme }) => theme.sizes.body};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.medium};
	}
`
export const SkillsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`
export const SkillDescription = styled.p`
	margin: 0 0 2rem 0;
	font-size: ${({ theme }) => theme.sizes.extraSmall};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.body};
	}
`