import { LanguagesQuery } from 'gql/generated/types'
import { useRouter } from 'next/router'
import React from 'react'
import { ActiveLanguage, InactiveLanguage, Wrapper } from './styled'

interface Props {
    languages: LanguagesQuery['languages']
}

const SelectLanguage: React.FC<Props> = ({ languages }) => {
    const { query } = useRouter()

    if (!languages) return null

    return (
        <Wrapper>
            {languages.map((language, index) => (
                <span key={language?.id}>
                    {index !== 0 && <span>&nbsp;/&nbsp;</span>}
                    {query?.locale === language?.languageCode ? (
                        <ActiveLanguage>{language?.displayName}</ActiveLanguage>
                    ) : (
                        <InactiveLanguage
                            onClick={() => {
                                // TODO: Create change language fn. It just needs to change location to that language page
                            }}
                        >
                            {language?.displayName}
                        </InactiveLanguage>
                    )}
                </span>
            ))}
        </Wrapper>
    )
}

export default SelectLanguage
