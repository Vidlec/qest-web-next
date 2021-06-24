import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Page: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			{children}
            <Footer />
		</>
	)
}

export default Page
