import React from 'react'
import useWindowSize from 'hooks/useWindowSize'
import HomePageContent from './HomePageContent'
import DesktopHeader from './DesktopHeader'
import Header from 'components/Header'
import { useTheme } from 'styled-components'

const HomePage: React.FC = () => {
	const isPohone = useWindowSize(useTheme().mediaQueriesNumbers.ipad, 100)
	return (
		<>
			{isPohone ? <Header /> : <DesktopHeader />}
			<HomePageContent />
		</>
	)
}

export default HomePage
