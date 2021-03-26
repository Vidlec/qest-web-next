import styled from 'styled-components'

export const NavigationColumnContainer = styled.div`
	position: absolute;
	right: 2vw;
	top: 4vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const MenuButton = styled.button`
	color: ${({ theme }) => theme.colors.roseRed};
	cursor: pointer;
	background-color: transparent;
	border: none;
	font-size: 1.75rem;
	text-decoration: none;
`

export const CloseButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 1.75rem;
	cursor: pointer;
	align-self: center;
`
