import React from 'react'
import i18next from 'i18next'

import { ActiveLanguage, InactiveLanguage, Wrapper } from './styled'
import languages from '../../locale/generated/languages.json'

const SelectLanguage: React.FC = () => (
	<Wrapper>
		{languages.map((language, index) => (
			<span key={index}>
				{index !== 0 && <span>&nbsp;/&nbsp;</span>}
				{i18next.language === language.languageCode ? (
					<ActiveLanguage>{language.displayName}</ActiveLanguage>
				) : (
					<InactiveLanguage>{language.displayName}</InactiveLanguage>
				)}
			</span>
		))}
	</Wrapper>
)

export default SelectLanguage
