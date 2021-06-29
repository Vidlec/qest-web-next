import styled from 'styled-components'



export const Wrapper = styled.div<{rows: number}>`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	grid-template-rows: repeat(9, 1fr);
	grid-auto-flow: row dense;
	gap: 60px;

	justify-items: center;
	justify-content: center;
	align-items: flex-end;

	@media ( min-width: ${({theme}) => theme.mediaQueries.desktop }) {
		grid-template-columns: repeat(13, 1fr);
		grid-template-rows: repeat(13, 1fr);
		gap: 30px;
	}
`


export const GalleryItemCube = styled.div`
	width: 100%;
	height: 100%;
	grid-column-end: span 4;
	grid-row-end: span 4;
	background-color: #0ff;
`

export const GalleryItemStand = styled.div`
	width: 100%;
	height: 100%;
	grid-column-end: span 4;
	grid-row-end: span 5;
	background-color: #f0f;
`

export const GalleryItemLay = styled.div`
	width: 100%;
	height: 100%;
	grid-column-end: span 5;
	grid-row-end: span 4;
	background-color: #ff0;
`

export const WhiteSpace = styled.div`
	width: 100%;
	height: 100%;
	grid-column-end: span 1;
	grid-row-end: span 1;
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`

/*
export const GalleryWrapper = styled.div<{rows: number}>`
	position: relative;
	width: 100%;
	padding-top: ${({rows}) => rows * 33.333}%;
	font-size: 2rem;
	margin-bottom: 4%;
`

export const GridWrapper = styled.div<{rows: number}>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	gap: ${({rows}) => 20 - 4 * ( rows + 1 )}% 4%;
	grid-template-columns: repeat(13, 4%);
	grid-template-rows: repeat( ${({rows}) => rows * 4 + 1}, ${({rows}) => 20 - 4 * ( rows + 1 )}%);
`

export const GalleryItemCube = styled.div`
	grid-column-end: span 4;
	grid-row-end: span 4;
    background-color: #0ff;
`

export const GalleryItemStand = styled.div`
	grid-column-end: span 4;
	grid-row-end: span 5;
    background-color: #f0f;
`

export const GalleryItemLay = styled.div`
	grid-column-end: span 5;
	grid-row-end: span 4;
    background-color: #ff0;
`

export const WhiteSpace = styled.div`
	grid-column-end: span 1;
	grid-row-end: span 1;
`

export const DotSpan = styled.span<{ color: string }>`
	color: ${({color}) => (color)};
	margin: 0 1rem;
`*/
