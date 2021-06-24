import NextLink, { LinkProps } from 'next/link'
import * as React from 'react'

const Link: React.FC<LinkProps> = ({ children, ...linkProps }) => {
    return (
        <NextLink {...linkProps} href={linkProps.href}>
            {children}
        </NextLink>
    )
}

export default Link
