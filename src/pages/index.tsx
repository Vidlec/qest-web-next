import Footer from 'components/Footer'
import Link from 'components/Link'
import { gqlUrl, RootPathParams } from 'constants/config'
import {
    FooterQuery,
    FooterQueryVariables,
    HomePageQuery,
    HomePageQueryVariables,
} from 'gql/generated/types'
import { FOOTER_QUERY } from 'gql/queries/footer'
import { HOMEPAGE_QUERY } from 'gql/queries/homepage'
import { request } from 'graphql-request'
import { GetStaticProps } from 'next'
import * as React from 'react'

type HomePageProps = HomePageQuery & FooterQuery

const HomePage: React.FC<HomePageProps> = ({ homepageNew, footer }) => {
    if (!homepageNew || !footer) return null

    const { topLeftLink, topRightLink, bottomLeftLink, bottomRightLink, logo } = homepageNew

    return (
        <div>
            <Link href="/" locale="cs">
                CZ
            </Link>
            <Link href="/" locale="en">
                EN
            </Link>
            <Link href="/products">Products</Link>
            <Link href={topLeftLink?.path ?? '/'}>{topLeftLink?.label}</Link>
            <Link href={topRightLink?.path ?? '/'}>{topRightLink?.label}</Link>
            <Link href={bottomLeftLink?.path ?? '/'}>{bottomLeftLink?.label}</Link>
            <Link href={bottomRightLink?.path ?? '/'}>{bottomRightLink?.label}</Link>
            <img src={logo?.url ?? ''} alt="Qest Logo" />

            <Footer {...footer} />
        </div>
    )
}

export const getStaticProps: GetStaticProps<HomePageProps, RootPathParams> = async ({ locale }) => {
    const homePage = await request<HomePageQuery, HomePageQueryVariables>(gqlUrl, HOMEPAGE_QUERY, {
        locale,
    })
    const footer = await request<FooterQuery, FooterQueryVariables>(gqlUrl, FOOTER_QUERY, {
        locale,
    })

    return { props: { ...homePage, ...footer } }
}

export default HomePage
