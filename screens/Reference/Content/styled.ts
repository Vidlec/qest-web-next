import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	min-height: 200vh;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	gap: 2rem;
`

export const Item = styled.div<{ height: number }>`
	grid-row-start: span ${({ height }) => height};
`

export const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`
