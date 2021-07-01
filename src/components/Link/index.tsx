import NextLink, { LinkProps } from 'next/link'
import React from 'react'
import { LinkColor, StyledLink } from './styled'

export type { LinkColor }

const Link: React.FC<LinkProps & { color?: LinkColor }> = ({
  color,
  children,
  ...nextLinkProps
}) => {
  return (
    <NextLink {...nextLinkProps} passHref>
      <StyledLink color={color}>{children}</StyledLink>
    </NextLink>
  )
}

export default Link
