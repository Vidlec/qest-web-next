import React from 'react'
import { Wrapper, Base, Content, End, Title } from './styled'

interface SqueareListProps {
	squares: { header: string; description: string }[]
}

const SquareList: React.FC<SqueareListProps> = ({ squares, children }) => {
	const squaresContent = squares.map((s) => (
		<Base key={s.header}>
			<Content>
				<Title>{s.header}</Title>
				<div>{s.description}</div>
			</Content>
		</Base>
	))
	return (
		<Wrapper>
			{squaresContent}
			<End>{children}</End>
		</Wrapper>
	)
}

export default SquareList
