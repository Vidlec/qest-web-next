import Link from 'components/Link'
import { gqlUrl } from 'constants/config'
import { ProductsQuery } from 'gql/generated/types'
import { PRODUCTS_QUERY } from 'gql/queries/products'
import request from 'graphql-request'
import { GetStaticProps } from 'next'
import * as React from 'react'

const Products: React.FC<ProductsQuery> = ({ products }) => {
    if (!products) return null

    return (
        <div>
            {products.map((product) => (
                <Link href={`/product/${product?.id}`} key={product?.id}>
                    {product?.name}
                </Link>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps<ProductsQuery, { id: string }> = async ({ locale }) => {
    const { products } = await request<ProductsQuery>(gqlUrl, PRODUCTS_QUERY, { locale })

    if (!products) return { props: {} }

    return { props: { products } }
}

export default Products
