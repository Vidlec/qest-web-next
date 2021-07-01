import i18next from 'i18next'
import React from 'react'
import { ActiveLanguage, InactiveLanguage, Wrapper } from './styled'

const SelectLanguage: React.FC = () => {
    return (
        <Wrapper>
            {/** TODO: Take from the actual languages definition */}
            {['cs', 'en'].map((language, index) => (
                <span key={language}>
                    {index !== 0 && <span>&nbsp;/&nbsp;</span>}
                    {i18next.language === language ? (
                        <ActiveLanguage>{language}</ActiveLanguage>
                    ) : (
                        <InactiveLanguage onClick={() => i18next.changeLanguage(language)}>
                            {language}
                        </InactiveLanguage>
                    )}
                </span>
            ))}
        </Wrapper>
    )
}

export default SelectLanguage
