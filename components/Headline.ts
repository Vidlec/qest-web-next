import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

//TODO: make color optional

export type ItemColor = 'red' | 'pink' | 'yellow' | 'blue' | 'green' | 'default'

const getItemColor = (theme: DefaultTheme, color: ItemColor): string => {
    const colorsMap: Record<ItemColor, string> = {
        red: theme.colors.red,
        pink: theme.colors.pink,
        yellow: theme.colors.yellow,
        blue: theme.colors.blue,
        green: theme.colors.green,
        default: theme.colors.white,
    }

    return colorsMap[color]
}

const Headline = styled.h1<{ color: ItemColor }>`
	color: ${({ theme, color }) => getItemColor(theme, color)};
	font-size: ${({ theme }) => theme.sizes.large};
	font-weight: bold;
	letter-spacing: 0;
	line-height: 1;
	margin-bottom: 1.6rem;
	margin-top: 0;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        font-size: ${({ theme }) => theme.sizes.extraLarge};
        margin-bottom: 3.6rem;
    }
  
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		font-size: ${({ theme }) => theme.sizes.pageTitle};
		margin-bottom: 3.6rem;
	}
`

export default Headline
