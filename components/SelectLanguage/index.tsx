import React from 'react'
import i18next from 'i18next'

import { ActiveLanguage, InactiveLanguage, Wrapper } from './styled'
import languages from '../../locale/generated/languages.json'

const SelectLanguage: React.FC = () => {
	return (
		<Wrapper>
			{languages.map((language, index) => (
				<span key={language.id}>
					{index !== 0 && <span>&nbsp;/&nbsp;</span>}
					{i18next.language === language.languageCode ? (
						<ActiveLanguage>{language.displayName}</ActiveLanguage>
					) : (
						<InactiveLanguage
							onClick={() =>
								i18next.changeLanguage(language.languageCode)
							}
						>
							{language.displayName}
						</InactiveLanguage>
					)}
				</span>
			))}
		</Wrapper>
	)
}

export default SelectLanguage
