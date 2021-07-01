import { CareerOfferings } from 'gql/generated/types'
import Link from 'next/link'
import React from 'react'
import {
  StyledBase,
  StyledContactUs,
  StyledContent,
  StyledEnd,
  StyledEndHead,
  StyledTitle,
  StyledWrapper,
} from './styled'

export { StyledEndHead, StyledContactUs }

interface Props {
  squares: CareerOfferings[]
}

const SquareList: React.FC<Props> = ({ squares, children }) => {
  return (
    <StyledWrapper>
      {squares.map((square) => (
        <Link href={`/career/${square.slug}`} key={square.title}>
          <StyledBase>
            <StyledContent>
              <StyledTitle color={square.color as string}>{square.title}</StyledTitle>
              <div>{square.perex}</div>
            </StyledContent>
          </StyledBase>
        </Link>
      ))}
      <StyledEnd>{children}</StyledEnd>
    </StyledWrapper>
  )
}

export default SquareList
