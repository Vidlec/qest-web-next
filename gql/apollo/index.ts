import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: process.env.CMS_GRAPHQL_URL,
	}),
	cache: new InMemoryCache(),
})

export default apolloClient
