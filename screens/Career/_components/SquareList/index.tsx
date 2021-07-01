import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	StyledWrapper,
	StyledBase,
	StyledContent,
	StyledEnd,
	StyledTitle,
	StyledEndHead,
	StyledContactUs,
} from './styled'
import { CareerOfferings } from 'gql/generated/types'

export { StyledEndHead, StyledContactUs }

interface Props {
	squares: CareerOfferings[]
}

const SquareList: React.FC<Props> = ({ squares, children }) => {
	const router = useRouter()

	return (
		<StyledWrapper>
			{squares.map((square) => (
				<Link href={`/career/${square.slug}`} key={square.title}>
					<StyledBase>
						<StyledContent>
							<StyledTitle color={square.color as string}>
								{square.title}
							</StyledTitle>
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
