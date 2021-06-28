import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
	Wrapper,
	Base,
	Content,
	End,
	Title,
	EndHead,
	ContactUs,
} from './styled'
import { CareerOfferings } from 'gql/generated/types'

export { EndHead, ContactUs }

interface Props {
	squares: CareerOfferings[]
}

const SquareList: React.FC<Props> = ({ squares, children }) => {
	const router = useRouter()

	return (
		<Wrapper>
			{squares.map((square) => (
				<Link href={`/career/${square.slug}`} key={square.title}>
					<Base>
						<Content>
							<Title color={square.color as string}>
								{square.title}
							</Title>
							<div>{square.perex}</div>
						</Content>
					</Base>
				</Link>
			))}
			<End>{children}</End>
		</Wrapper>
	)
}

export default SquareList
