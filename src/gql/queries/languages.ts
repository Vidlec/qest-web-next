import { gql } from 'graphql-request'

export const LANGUAGE_QUERY = gql`
    query {
        languages {
            id
            languageCode
            displayName
        }
    }
`
