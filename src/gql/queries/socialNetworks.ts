import { gql } from 'graphql-request'

export const SOCIAL_NETWORK_QUERY = gql`
    query {
        socialNetworks {
            id
            name
            url
        }
    }
`
