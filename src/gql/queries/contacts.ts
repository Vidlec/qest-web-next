import { gql } from 'graphql-request'

export const CONTACT_QUERY = gql`
    query {
        contacts {
            id
            language
            title
            address
            taxIdentificationNumbers
            taxIdentificationDescription
            email
            phoneNumber
        }
    }
`
