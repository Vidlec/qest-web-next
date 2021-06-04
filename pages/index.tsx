import React from 'react'

import { Wrapper } from './styled'
import HomePageMenu from 'components/HomePageMenu'
import HomePageContent from 'components/HomePageContent'

const Index: React.FC = () => {
	return (
		<Wrapper>
			<HomePageMenu />
			<HomePageContent />
		</Wrapper>
	)
}

export default Index
