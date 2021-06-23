import React, { useEffect, useState } from 'react'
import HomePage from 'components/HomePage'
import Page from 'components/Page'
import Header from 'components/Header'
import { useMediaQuery } from 'react-responsive'
import theme from 'theme'

const Index: React.FC = () => {

	return (
		<Page>
			<HomePage />
		</Page>
	)
}

export default Index
