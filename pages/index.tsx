import React, { useEffect, useState } from 'react'
import HomePage from 'components/HomePage'
import Header from 'components/Header'
import { useMediaQuery } from 'react-responsive'
import theme from 'theme'

const Index: React.FC = () => {
	const isPhone = !useMediaQuery({
		query: `(min-device-width: ${theme.mediaQueriesNumbers.ipad}px)`,
	})

	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if(mounted) {
		return (
			<>
				{isPhone && <Header />}
				<HomePage />
			</>
		)
	}

	return (<span>loading</span>)

}

export default Index
