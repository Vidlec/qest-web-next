import styled from 'styled-components'

export const GalleryWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: 100%;
	font-size: 2rem;
`

export const GridWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;

	gap: 4%;
	grid-template-columns: repeat(13, 4%);
	grid-template-rows: repeat(13, 4%);
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
	color: ${({color}) => color};
	margin: 0 1rem;
`
