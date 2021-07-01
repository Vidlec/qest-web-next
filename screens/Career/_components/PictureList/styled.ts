import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
	font-size: ${({ theme }) => theme.sizes.medium};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 5rem;
	padding: 0 2rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		padding: 0;
		flex-direction: row;
	}
`
export const Heading = styled.h5`
	position: absolute;
	display: block;
	margin: 0 0 0 -50%;
	font-weight: 600;
	font-size: ${({ theme }) => theme.sizes.small};
	text-align: center;
	top: -8.8rem;
	left: 50%;
	width: 100%;
	text-transform: uppercase;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: ${({ theme }) => theme.sizes.medium};
	}

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		position: relative;
		text-align: left;
		margin: 0 0 2.4rem 0;
		left: unset;
		top: unset;
	}
`

export const Description = styled.div`
	margin: 0;
	text-align: justify;
	font-size: ${({ theme }) => theme.sizes.small};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		text-align: left;
		font-size: ${({ theme }) => theme.sizes.medium};
	}
`

export const ItemIndex = styled.div<{ color: string | undefined }>`
	position: relative;
	color: ${({ color }) => color};

	align-self: flex-start;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: 18rem;
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
	font-size: ${({ theme }) => theme.sizes.BigNumber};
	text-align: center;
	line-height: 12rem;
	left: 0;
	bottom: 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: 100%;
		left: unset;
		bottom: unset;
		top: -1.3rem;
	}
`

export const ItemImg = styled.img`
	margin: 0 0 0 2rem;
	max-height: 13.1rem;
	max-width: 100%;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
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

export const ShowMore = styled.div`
	display: flex;
	justify-content: center;
`

export const ShowMoreButton = styled.button`
	border: none;
	background: none;
	color: ${({ theme }) => theme.colors.purple};
	font-size: ${({ theme }) => theme.sizes.large};
	cursor: pointer;
`
