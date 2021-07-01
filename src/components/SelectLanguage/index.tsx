import Link from 'components/Link'
import i18next from 'i18next'
import { useRouter } from 'next/router'
import React from 'react'
import { ActiveLanguage, Wrapper } from './styled'

const SelectLanguage: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <Wrapper>
      {/** TODO: Take from the actual languages definition */}
      {['cs', 'en'].map((language, index) => (
        <span key={language}>
          {index !== 0 && <span>&nbsp;/&nbsp;</span>}
          {i18next.language === language ? (
            <ActiveLanguage>{language}</ActiveLanguage>
          ) : (
            <Link href={pathname} locale={language}>
              {language}
            </Link>
          )}
        </span>
      ))}
    </Wrapper>
  )
}

export default SelectLanguage
