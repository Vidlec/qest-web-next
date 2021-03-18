import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './generated/resources'

export enum Language {
	EN = 'en',
	CS = 'cs',
}

i18.use(initReactI18next).init({
	lng: Language.EN,
	fallbackLng: Language.CS,
	resources,
	interpolation: {
		escapeValue: false,
	},
})

export default i18
