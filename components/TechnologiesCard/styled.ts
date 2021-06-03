import styled from 'styled-components'

export const Card = styled.div`
	color: ${({ theme }) => theme.colors.green};
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`
export const Picture = styled.picture<{ handIsOnMiddle?: boolean }>`
	position: absolute;
	right: 1rem;
	top: calc(100% - 3rem);

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
	font-size: 1.6rem;
	font-weight: bold;
`

export const Description = styled.div`
	margin: 0;
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem;
`
