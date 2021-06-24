import { gql } from 'graphql-request'

export const LANGUAGES_QUERY = gql`
    query Languages {
        languages {
            id
            languageCode
            displayName
        }
    }
`
