import React from 'react'
import { Container, Wrapper, Base, Content, End, Title } from './styled'

interface Props {
	squares: { header: string; description: string; color: string }[]
}

const SquareList: React.FC<Props> = ({ squares, children }) => {
	const squaresContent = squares.map((s) => (
		<Base key={s.header}>
			<Content>
				<Title color={s.color}>{s.header}</Title>
				<div>{s.description}</div>
			</Content>
		</Base>
	))
	return (
		<Container>
			<Wrapper>
				{squaresContent}
				<End>{children}</End>
			</Wrapper>
		</Container>
	)
}

export default SquareList
