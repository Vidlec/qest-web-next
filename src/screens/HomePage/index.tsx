import Header from 'components/Header'
import React from 'react'
import { useTheme } from 'styled-components'
import useWindowSize from 'utils/hooks/useWindowSize'
import DesktopHeader from './DesktopHeader'
import HomePageContent from './HomePageContent'

const HomePage: React.FC = () => {
  const theme = useTheme()
  const isPhone = useWindowSize(theme.mediaQueriesNumbers.ipad, 100)
  return (
    <>
      {isPhone ? <Header /> : <DesktopHeader />}
      <HomePageContent />
    </>
  )
}

export default HomePage
