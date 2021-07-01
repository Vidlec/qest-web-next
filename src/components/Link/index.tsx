import React from 'react'
import NextLink from 'next/link'
import { StyledLink, LinkColor } from './styled'

export type { LinkColor }

const Link: React.FC<{ href: string; color?: LinkColor }> = ({ href, color, children }) => {
    return (
        <NextLink href={href} passHref>
            <StyledLink color={color}>{children}</StyledLink>
        </NextLink>
    )
}

export default Link
