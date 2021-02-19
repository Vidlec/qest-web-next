import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://dev.cms.qestapp.net/graphql',
  }),
  cache: new InMemoryCache()
})

export default apolloClient