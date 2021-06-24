import { gql } from 'graphql-request'

export const FOOTER_QUERY = gql`
    query Footer($locale: String) {
        footer(locale: $locale) {
            title
            contact {
                address
                phoneNumber
                email
                ico
                dic
                legal
            }
            social {
                facebook
                linkedIn
                instagram
                twitter
            }
        }
    }
`
