import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const WrapperLogoTexts = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 5rem;
	align-items: center;
	margin-left: 0;
	z-index: 1;
	font-size: 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		top: 10rem;
	}

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 33%;
		height: 100vh;
		top: 0;
		right: 0;
		align-items: flex-start;
		justify-content: center;
		margin-top: 4px;
	}
`

export const TextLogo = styled.p`
	font-size: 1.3rem;
	margin: 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 1rem;
		margin: 0.5rem 0;
	}
`

export const Logo = styled.div`
	width: 100%;
	height: 15rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

export const PictureLogo = styled.img`
	width: 20rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		width: 38rem;
	}
`

export const SlideStopWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 4rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		bottom: 6rem;
	}
`

export const Button = styled.button`
	font-family: wingdings2, Tahoma, Sans-Serif;
	font-size: 4rem;
	background-color: transparent;
	border: none;
	cursor: pointer;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 5rem;
	}
`

export const ClickText = styled.a`
	font-weight: bold;
	cursor: pointer;
	font-size: 1rem;
	margin: 0;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 1.5rem;
	}
`

export const MenuButton = styled.button`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.mainMenuButton};
	cursor: pointer;
	background-color: transparent;
	border: none;
`

export const MenuWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: absolute;
	flex-direction: column;
	z-index: 10;
`

export const MenuList = styled.ul`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: flex-end;
	align-content: space-between;
	list-style: none;
	padding: 0;
	margin: 0;
`

export const Item = styled.li`
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
`
