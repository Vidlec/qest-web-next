import styled, { DefaultTheme } from 'styled-components'
import { Theme } from 'theme/index'

type IColSize = number | 'auto' | 'span'
interface ICol {
	mobile?: IColSize
	mobileLarge?: IColSize
	ipad?: IColSize
	desktopSmall?: IColSize
	desktop?: IColSize
	desktopLarge?: IColSize
}

function getStyles(
	theme: DefaultTheme,
	mediaQuery: keyof Theme['mediaQueries'],
	colSize?: IColSize
) {
	return colSize !== undefined
		? `
			@media (min-width: ${theme.mediaQueries[mediaQuery]}) {
				flex: 0 0 ${getFlexSize(colSize)};
				max-width: ${getFlexSize(colSize)};
				${colSize === 'auto' ? `width: auto;` : ''}
			}
		`
		: ''
}

export const Col = styled.div<ICol>`
	flex-basis: 0;
	-webkit-box-flex: 1;
	flex-grow: 1;
	max-width: 100%;

	padding-left: 1rem;
	padding-right: 1rem;

	box-sizing: border-box;

	${({ mobile, theme }) => getStyles(theme, 'mobile', mobile)}
	${({ mobileLarge, theme }) => getStyles(theme, 'mobileLarge', mobileLarge)}
	${({ ipad, theme }) => getStyles(theme, 'ipad', ipad)}
	${({ desktopSmall, theme }) => getStyles(theme, 'desktopSmall', desktopSmall)}
	${({ desktop, theme }) => getStyles(theme, 'desktop', desktop)}
	${({ desktopLarge, theme }) => getStyles(theme, 'desktopLarge', desktopLarge)}
`

function getFlexSize(colSize: IColSize) {
	if (colSize === 'auto') return 'auto'
	if (colSize === 'span') return 0

	return `${(100 / 12) * colSize}%`
}
