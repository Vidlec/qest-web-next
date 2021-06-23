import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
	font-size: 2.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 5rem;
	padding: 0 4.9rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		padding: 0;
		flex-direction: row;
	}
`
export const Heading = styled.h5`
	position: absolute;
	display: block;
	margin: 0 0 0 -50%;
	font-weight: 600;
	font-size: 2.2rem;
	text-align: center;
	top: -8.8rem;
	left: 50%;
	width: 100%;
	text-transform: uppercase;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		position: relative;
		text-align: left;
		margin: 0 0 2.4rem 0;
		left: unset;
		top: unset;
		font-size: 2.1875rem;
	}
`

export const Description = styled.p`
	margin: 0;
	text-align: justify;
	font-size: 1.3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		text-align: left;
		font-size: 2.1875rem;
	}
`

export const ItemIndex = styled.div<{ color: string | undefined }>`
	position: relative;
	color: ${({ color }) => color};
	width: 18rem;
	align-self: flex-start;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		margin: 0 6rem 0 0;
		align-self: unset;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

export const ItemIndexNumber = styled.span`
	position: absolute;
	display: block;
	font-size: 9.375rem;
	text-align: center;
	line-height: 12rem;
	left: 0;
	bottom: 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		width: 100%;
		left: unset;
		bottom: unset;
		top: -1.3rem;
	}
`

export const ItemImg = styled.img`
	margin: 0 0 0 3rem;
	max-height: 13.1rem;
	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		margin: 0 0 0 0;
		max-width: 14rem;
		max-height: 14rem;
	}
`

export const ItemInformation = styled.div`
	position: relative;
	width: 100%;
	flex-shrink: 1;
`
