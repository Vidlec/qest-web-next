import { gql } from 'graphql-request'

export const PRODUCT_QUERY = gql`
    query Product($id: ID!) {
        product(id: $id) {
            id
            name
            locale
        }
    }
`
