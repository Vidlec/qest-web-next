import styled, { DefaultTheme } from 'styled-components'
import { Theme } from 'theme/index'

type ColSize = number | 'auto' | 'span'
interface ColProps {
  mobile?: ColSize
  mobileLarge?: ColSize
  ipad?: ColSize
  desktopSmall?: ColSize
  desktop?: ColSize
  desktopLarge?: ColSize
}

function getStyles(
  theme: DefaultTheme,
  mediaQuery: keyof Theme['mediaQueries'],
  colSize?: ColSize
) {
  return colSize !== undefined
    ? `
			@media (min-width: ${theme.mediaQueries[mediaQuery]}) {
				flex: 0 0 ${getFlexSize(colSize)};
				max-width: ${getFlexSize(colSize)};
				${colSize === 'auto' ? 'width: auto;' : ''}
			}
		`
    : ''
}

const Col = styled.div<ColProps>`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  padding-left: 1rem;
  padding-right: 1rem;

  ${({ mobile, theme }) => getStyles(theme, 'mobile', mobile)}
  ${({ mobileLarge, theme }) => getStyles(theme, 'mobileLarge', mobileLarge)}
	${({ ipad, theme }) => getStyles(theme, 'ipad', ipad)}
	${({ desktopSmall, theme }) => getStyles(theme, 'desktopSmall', desktopSmall)}
	${({ desktop, theme }) => getStyles(theme, 'desktop', desktop)}
	${({ desktopLarge, theme }) => getStyles(theme, 'desktopLarge', desktopLarge)}
`

export default Col

function getFlexSize(colSize: ColSize) {
  if (colSize === 'auto') return 'auto'
  if (colSize === 'span') return 0

  return `${(100 / 12) * colSize}%`
}
