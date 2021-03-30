import React, { createContext, useContext, useMemo } from 'react'
import { getI18n, TFunction } from 'react-i18next'
import { Language } from 'locale'

const translationContext = createContext<TFunction>(() => '')

interface ProviderProps {
	language: Language
}

export const TranslationProvider: React.FC<ProviderProps> = ({
	language,
	children,
}) => {
	const t = useMemo(() => getI18n().getFixedT(language), [language])

	return (
		<translationContext.Provider value={t}>
			{children}
		</translationContext.Provider>
	)
}

export const useTranslation = (): TFunction => useContext(translationContext)
