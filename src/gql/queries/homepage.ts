import { gql } from 'graphql-request'

export const InternalLinkFragment = gql`
    fragment InternalLinkFragment on ComponentNavigationInternalLink {
        label
        path
    }
`

export const HOMEPAGE_QUERY = gql`
    query HomePage($locale: String) {
        homepageNew(locale: $locale) {
            id
            clickToStopText
            aboveLineText
            belowLineText
            topLeftLink {
                ...InternalLinkFragment
            }
            topRightLink {
                ...InternalLinkFragment
            }
            bottomLeftLink {
                ...InternalLinkFragment
            }
            bottomRightLink {
                ...InternalLinkFragment
            }
            logo {
                url
            }
        }
    }
    ${InternalLinkFragment}
`
