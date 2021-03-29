import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import {
	InMemoryCache,
	IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import fragmentTypes from '../generated/fragmentTypes.json'

const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: process.env.CMS_GRAPHQL_URL,
	}),
	cache: new InMemoryCache({
		fragmentMatcher: new IntrospectionFragmentMatcher({
			introspectionQueryResultData: fragmentTypes as any,
		}),
	}),
})

export default apolloClient
