import React from 'react'
import Technologies from '../components/TechList'
import apolloClient from '../gql/apollo/'
import { TECH_LIST_QUERY } from '../gql/queries/techList'

const Index = ({ techList }) => {
	return (
		<div>
			<h1>QEST</h1>
			<h2>Tech-stack:</h2>
			<Technologies techList={techList} />
		</div>
	)
}

export const getStaticProps = async () => {
	const techList = await apolloClient.query({
		query: TECH_LIST_QUERY,
	})

	return {
		props: {
			techList: techList?.data?.techLists || [],
		},
	}
}

export default Index
