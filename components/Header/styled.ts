import styled from 'styled-components'

export const MenuPanel = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	margin: 0 0 9rem 0;
`

export const Item = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	&:first-child {
		justify-content: flex-start;
	}

	&:last-child {
		justify-content: flex-end;
	}
`

export const MenuButton = styled.button`
	padding: 1rem;
	color: ${({ theme }) => theme.colors.red};
	border: none;
	background: none;
	cursor: pointer;
	font-size: 1.44rem;
`

export const MenuCross = styled.button`
	padding: 1rem;
	color: ${({ theme }) => theme.colors.red};
	border: none;
	background: none;
	cursor: pointer;
	font-size: 4rem;
	line-height: 4rem;
	margin-bottom: 2rem;
`

export const MenuWrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.mainBackground};
	z-index: 10;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 2.38rem 2.25rem;
`

export const Link = styled.span`
	font-size: 2.2rem;
	margin: 0 0 2rem;
`

export const Icon = styled.img`
	height: 4rem;
	cursor: pointer;
`
