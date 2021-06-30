import styled from 'styled-components'

const Headline = styled.h1<{ color?: string }>`
	color: ${({ color, theme }) => (color ? color : theme.colors.lightGray)};
	font-size: ${({ theme }) => theme.sizes.body};
	font-weight: bold;
	letter-spacing: 0;
	line-height: 1;
	margin-bottom: 1.6rem;
	margin-top: 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.pageTitle};
		margin-bottom: 3.6rem;
	}
`

export default Headline
