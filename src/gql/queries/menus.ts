import { gql } from 'graphql-request'

export const MENU_QUERY = gql`
    query {
        menus {
            id
            aboutUs
            career
            contact
            homePage
            language
            menu
            reference
        }
    }
`
