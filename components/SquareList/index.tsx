import React from 'react'
import { Container, Wrapper, Base, Content, End, Title, EndHead, ContactUs } from './styled'
import { CareerOfferings } from 'gql/generated/types'

export { EndHead, ContactUs }

interface Props {
	squares: CareerOfferings[]
}

const SquareList: React.FC<Props> = ({ squares, children }) => {
	return (
		<Container>
			<Wrapper>
				{
					squares.map((s) => (
						<Base key={s.title}>
							<Content>
								<Title color={s.color as string}>{s.title}</Title>
								<div>{s.perex}</div>
							</Content>
						</Base>
					))
				}
				<End>{children}</End>
			</Wrapper>
		</Container>
	)
}

export default SquareList
