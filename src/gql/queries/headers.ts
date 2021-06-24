import { gql } from 'graphql-request'

export const HEADER_QUERY = gql`
    query {
        headers {
            id
            language
            title
            description
            logo {
                url
            }
        }
    }
`
