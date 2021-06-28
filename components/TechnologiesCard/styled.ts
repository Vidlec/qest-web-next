import styled from 'styled-components'

export const Card = styled.div`
	color: ${({ theme }) => theme.colors.green};
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`
export const Picture = styled.img<{ handIsOnMiddle?: boolean }>`
	position: absolute;
	right: 1rem;
	top: calc(50% - 6.25rem);
	height: 12.5rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		${({ handIsOnMiddle }) =>
			handIsOnMiddle
				? `
		    bottom: calc(50% - 5rem);
            right: -1rem;
            `
				: `
            transform: rotate(180deg);
		    bottom: calc(100% - 4rem);
            `}

		top: unset;
	}
`
export const Heading = styled.h5`
	margin: 0 0 1rem 0;
	font-size: 1.8rem;
	font-weight: bold;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 1.5625rem;
	}
`

export const Description = styled.p`
	margin: 0 0 2rem 0;
	font-family: 'sourceCodeVariable';
	font-size: 1.3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 1.25rem;
	}
`
export const ImageWrapper = styled.div`
	width: calc(100% + 4rem);
	margin: 0 -3rem 0 -1rem;
	display: flex;
	justify-content: space-between;
`
