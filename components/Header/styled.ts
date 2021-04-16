import { MainMenu } from 'components/Link'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1vh;
`

export const Logo = styled.img`
	height: 100%;
`

export const StyledMainMenu = styled(MainMenu)`
	padding-right: 2vw;
`

export const LanguageSwitcherWrapper = styled.div`
	position: absolute;
	top: 4vh;
	left: 50%;
	right: 50%;
`
