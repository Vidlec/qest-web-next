import styled from 'styled-components'

const Headline = styled.h1<{color?: string}>`
	color: ${({ color, theme }) =>  color? color : theme.colors.lightGray};
	font-size: 4.4rem;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 1;
	margin-bottom: 3.6rem;
	margin-top: 0;
`

export default Headline
