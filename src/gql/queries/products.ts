import { gql } from 'graphql-request'

export const PRODUCTS_QUERY = gql`
    query Products($locale: String) {
        products(locale: $locale) {
            id
            name
            locale
        }
    }
`
