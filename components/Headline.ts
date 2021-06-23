import styled from 'styled-components'

const Headline = styled.h1<{color?: string}>`
	color: ${({ color, theme }) =>  color? color : theme.colors.lightGray};
	font-size: 2rem;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 1;
	margin-top: 0;
	margin-bottom: 1.7rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 4.4rem;
		margin-bottom: 3.6rem;
	}
`

export default Headline
