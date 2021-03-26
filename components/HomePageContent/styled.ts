import styled from 'styled-components'

export const WrapperLogoTexts = styled.div`
	display: flex;
	width: 100%;
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

export const Line = styled.div`
	width: 100%;
	position: absolute;
	height: 0.15rem;
	margin-top: 0.25rem;
	background-color: ${({ theme }) => theme.colors.porcelainWhite};
	box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.porcelainWhite};

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		height: 0.25rem;
		margin-top: 0.45rem;
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
