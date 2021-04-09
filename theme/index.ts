const mediaQueriesNumbers = {
	mobile: 0,
	mobileLarge: 640,
	ipad: 768,
	desktopSmall: 1024,
	desktop: 1280,
	desktopLarge: 1536,
}

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
	mediaQueriesNumbers,
	mediaQueries: {
		// desktopLarge: '110rem',
		// desktop: '80rem',
		// ipad: '50rem',
		// mobile: '30rem',

		mobile: `${mediaQueriesNumbers.mobile}px`,
		mobileLarge: `${mediaQueriesNumbers.mobileLarge}px`,
		ipad: `${mediaQueriesNumbers.ipad}px`,
		desktopSmall: `${mediaQueriesNumbers.desktopSmall}px`,
		desktop: `${mediaQueriesNumbers.desktop}px`,
		desktopLarge: `${mediaQueriesNumbers.desktopLarge}px`,
	},
}

export type Theme = typeof theme

export default theme
