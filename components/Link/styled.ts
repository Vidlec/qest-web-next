import styled, { DefaultTheme } from 'styled-components'

export type LinkColor = 'red' | 'pink' | 'yellow' | 'blue' | 'green' | 'default'

const getLinkColor = (theme: DefaultTheme, color: LinkColor): string => {
	const colorsMap: Record<LinkColor, string> = {
		red: theme.colors.red,
		pink: theme.colors.pink,
		yellow: theme.colors.yellow,
		blue: theme.colors.blue,
		green: theme.colors.green,
		default: theme.colors.white,
	}

	return colorsMap[color]
}

export const StyledLink = styled.a<{ color?: LinkColor }>`
	font-size: 2.4rem;
	margin-bottom: 2rem;
	color: ${({ color = 'default', theme }) => getLinkColor(theme, color)};

	:hover {
		filter: brightness(200%);
	}

	@media ( min-width: ${({theme}) => theme.mediaQueries.desktop}) {
		font-size: 1.5rem;
	}
`
