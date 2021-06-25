import styled from 'styled-components'

const Headline = styled.h1<{color?: string}>`
	color: ${({ color, theme }) =>  color? color : theme.colors.lightGray};
	font-size: ${({theme}) => theme.sizes.large};
	font-weight: bold;
	letter-spacing: 0;
	line-height: 1;
	margin-top: 0;
	margin-bottom: 3.6rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		font-size: ${({theme}) => theme.sizes.pageTitle}
	}
`

export default Headline
