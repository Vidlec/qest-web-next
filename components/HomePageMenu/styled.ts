import styled from 'styled-components'

export const IntroMenuSwitcher = styled.nav`
	width: 100%;
	height: 4rem;
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: flex-end;
	top: 0;
	padding: 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		display: none;
	}
`

export const IntroMenuButton = styled.button`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.mainMenuButton};
	cursor: pointer;
	background-color: transparent;
	border: none;
`

export const IntroMenuWrapper = styled.div<{ isOpen: boolean }>`
	width: 100%;
	height: 100vh;
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	position: absolute;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.mainBackground};
	z-index: 10;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		display: flex;
		background-color: transparent;
	}
`

export const IntroMenuCross = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	line-height: 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.mainMenuButton};
	background-color: none;
	font-size: 5rem;
	margin-top: 1rem;
`

export const IntroMenuList = styled.ul`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	list-style: none;
	padding: 0;
	margin-top: 4rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		height: 100vh;
		margin: 0;
		align-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
	}
`

export const IntroItem = styled.li`
	margin: 0 1rem 0 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		margin: 0;
		padding: 3.75rem 2.5rem;
		width: 33%;
		flex-grow: 1;

		// Main page
		&:nth-child(1) {
			display: none;
		}

		// Languages picker
		&:nth-child(3) {
			text-align: center;
		}

		// Reference
		&:nth-child(4) {
			text-align: right;
		}

		// Contact
		&:nth-child(6) {
			flex-grow: 2;
			text-align: right;
		}
	}
`
