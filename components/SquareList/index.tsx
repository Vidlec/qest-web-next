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
			{squares.map((s) => (
				<Link href={`/career/${s.slug}`} key={s.title}>
					<Base>
						<Content>
							<Title color={s.color as string}>{s.title}</Title>
							<div>{s.perex}</div>
						</Content>
					</Base>
				</Link>
			))}
			<End>{children}</End>
		</Wrapper>
	)
}

export default SquareList
