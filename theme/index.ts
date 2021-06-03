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
		bodyColor: '#001F3F',
		aboutButton: '#84E2FF',
		referenceButton: '#FFB7C4',
		h3: '#FCC500',
		contactButton: '#81F287',
		mainFont: '#F0EFEC',
		mainMenuButton: '#DC4846',
		mainBackground: '#0E0E0E',
		caseStudyComplementaryColor: '#317A5B',
		h1: '#CDCDCD',
		technologiesBackground: '#000000',
		yellow: '#FCC403',
		red: '#FF5451',
		blue: '#83E1FF',
		green: '#80F286',
		pink: '#d096a0',
		black: '#000',
		lightGray: '#cccccc',
		white: '#fff',
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
