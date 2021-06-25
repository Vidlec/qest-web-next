import React from 'react'
import useIsWindowSize from 'hooks/useIsWindowSize'
import HomePageContent from './HomePageContent'
import DesktopHeader from './DesktopHeader'
import Header from 'components/Header'
import { useTheme } from 'styled-components'

const HomePage: React.FC = () => {
	const isPohone = useIsWindowSize(useTheme().mediaQueriesNumbers.ipad, 100)
	return (
		<>
			{isPohone ? <Header /> : <DesktopHeader />}
			<HomePageContent />
		</>
	)
}

export default HomePage
