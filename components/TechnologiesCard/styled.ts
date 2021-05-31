import styled from 'styled-components'

export const Card = styled.div`
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`
export const Picture = styled.picture<{handIsOnMiddle?: boolean}>`
	position: absolute;
	right: 1rem;
	top: calc(100% - 3rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		${({handIsOnMiddle}) => handIsOnMiddle? 
            `
		    bottom: calc(50% - 5rem);
            right: -1.4rem;
            ` 
            :
            `
            transform: rotate(180deg);
		    bottom: calc(100% - 4rem);
            `
        }

		top: unset;
	}
`
export const Description = styled.div`
	margin: 0 0 2rem 0;
	color: ${({ theme }) => theme.colors.green};
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem;
`