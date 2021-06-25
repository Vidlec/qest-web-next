import React from 'react'
import useisPhone from 'hooks/useIsPhone'
import HomePageContent from './HomePageContent'
import DesktopHeader from './DesktopHeader'
import theme from 'theme'
import Header from 'components/Header'

const HomePage: React.FC = () => {
	const isPohone = useisPhone(theme.mediaQueriesNumbers.ipad, 100)
	return (
		<>
			{isPohone ? <Header /> : <DesktopHeader />}
			<HomePageContent />
		</>
	)
}

export default HomePage
