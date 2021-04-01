import React from 'react'

import { Wrapper } from './styled'
import Navigation from 'components/Menu'
import HomePageContent from 'components/HomePageContent'

const Index: React.FC = () => {
	return (
		<Wrapper>
			<Navigation />
			<HomePageContent />
		</Wrapper>
	)
}

export default Index
