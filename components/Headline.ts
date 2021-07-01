import styled from 'styled-components'

interface Props {
    color: string
}

const Headline = styled.h1<Props>`
	color: ${(props) => props.color}
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
