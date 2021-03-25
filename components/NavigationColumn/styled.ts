import styled from 'styled-components'

export const NavigationColumnContainer = styled.div`
	position: absolute;
	right: 5vw;
	top: 5vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const MenuButton = styled.button`
	color: ${({ theme }) => theme.colors.roseRed};
	cursor: pointer;
	background-color: transparent;
	border: none;
	margin-right: 1vw;
	font-size: 1.75rem;
	text-decoration: none;
`

export const CloseButton = styled.button`
	background-color: transparent;
	border: none;
	margin-right: 1vw;
	font-size: 1.75rem;
	cursor: pointer;
`

