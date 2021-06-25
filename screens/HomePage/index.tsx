import React from 'react'
import useWindowSize from 'hooks/useWindowSize'
import HomePageContent from './HomePageContent'
import DesktopHeader from './DesktopHeader'
import Header from 'components/Header'
import { useTheme } from 'styled-components'

const HomePage: React.FC = () => {
	const theme = useTheme()
	const isPohone = useWindowSize(theme.mediaQueriesNumbers.ipad, 100)
	return (
		<>
			{isPohone ? <Header /> : <DesktopHeader />}
			<HomePageContent />
		</>
	)
}

export default HomePage
