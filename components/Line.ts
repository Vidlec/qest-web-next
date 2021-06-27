import styled from 'styled-components'

const Line = styled.div`
	width: 100%;
	position: absolute;
    height: 0.25rem;
    margin-top: -.7rem;
	left: 0;
	background-color: ${({ theme }) => theme.colors.mainFont};
	box-shadow: 0 0 12px ${({ theme }) => theme.colors.mainFont};
`

export default Line
