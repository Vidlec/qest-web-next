import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

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

export const Paragraph = styled.p`
  margin: 0 0 100px 0;
  font-size: ${({ theme }) => theme.sizes.small};
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`

export const Item = styled.a<{ color: ItemColor }>`
  &::after {
    content: '✦';
    color: ${({ theme, color }) => getItemColor(theme, color)};
    padding: 0 1rem;
  }
`
