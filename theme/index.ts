export const theme = {
	colors: {
		niceBlack: '#001F3F',
		poolBlue: '#84E2FF',
		orchidPink: '#FFB7C4',
		merigoldOrange: '#FCC500',
		mintGreen: '#81F287',
		porcelainWhite: '#F0EFEC',
		roseRed: '#DC4846',
		softBlack: '#0E0E0E',
		yellow: '#FCC403',
		red: '#FF5451',
		blue: '#83E1FF',
		green: '#80F286',
		pink: '#d096a0',
		black: '#000',
	},
	mediaQueries: {
		// desktopLarge: '110rem',
		// desktop: '80rem',
		// ipad: '50rem',
		// mobile: '30rem',

		mobile: '0px',
		mobileLarge: '640px',
		ipad: '768px',
		desktopSmall: '1024px',
		desktop: '1280px',
		desktopLarge: '1536px',
	},
}

export type Theme = typeof theme

export default theme
