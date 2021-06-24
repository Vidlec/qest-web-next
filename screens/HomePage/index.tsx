import React from 'react'
import useScreenSize from 'hooks/useScreenSize'
import HomePageContent from './HomePageContent'
import DesktopHeader from './DesktopHeader'
import theme from 'theme'
import Header from 'components/Header'

const HomePage: React.FC = () => {
	const isPohone = useScreenSize(theme.mediaQueriesNumbers.ipad)
	return (
		<>
			{isPohone ? <Header /> : <DesktopHeader /> }
			<HomePageContent />
		</>
	)
}

export default HomePage
