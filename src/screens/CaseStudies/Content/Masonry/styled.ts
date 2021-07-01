import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, 2fr);
	grid-auto-rows: 1fr;
	grid-auto-flow: row dense;
	gap: 40px;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		grid-template-columns: repeat(2, 2fr);
	}

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const Item = styled.a<{ height: number }>`
	grid-row-start: span ${({ height }) => height};
	display: block;
	width: 100%;
	height: 100%;
	cursor: pointer;
`

export const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`
