import { gqlUrl } from 'constants/config'
import { ProductQuery, ProductQueryVariables, ProductsQuery } from 'gql/generated/types'
import { PRODUCT_QUERY } from 'gql/queries/product'
import { PRODUCTS_QUERY } from 'gql/queries/products'
import request from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as React from 'react'

const Product: React.FC<ProductQuery> = ({ product }) => {
    if (!product) return null

    return <div>{product.name}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { products } = await request<ProductsQuery>(gqlUrl, PRODUCTS_QUERY, { locale: 'all' })

    if (!products) return { paths: [], fallback: false }

    return {
        paths: products.map((product) => ({
            params: { id: product?.id },
            locale: product?.locale ?? '',
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<ProductQuery, { id: string }> = async ({ params }) => {
    const { product } = await request<ProductQuery, ProductQueryVariables>(gqlUrl, PRODUCT_QUERY, {
        id: params?.id ?? '',
    })

    return { props: { product } }
}

export default Product
