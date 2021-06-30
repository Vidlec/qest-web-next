import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Container from 'components/Container'
import Headline from 'components/Headline'
import Line from 'components/Line'

export const ArrowDownIcon = styled.img`
	transform: rotate(90deg);
	width: 49px;
	margin-bottom: 24px;
`

export const ArrowLink = styled(AnchorLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ArrowLinkWrapper = styled.div`
	margin: auto;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 3;
        margin-top: 0;
	}
`

export const HeroContainer = styled(Container)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
    margin-bottom: 0;
`

export const HeroHeadline = styled(Headline)`
	margin: 1rem 0 calc(1.5rem - 0.45rem);
	font-size: ${({ theme }) => theme.sizes.body};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.extraLarge};
		max-width: calc(100% - 20rem - 4rem);
	}
`

export const HeroLine = styled(Line)`
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		display: none;
	}
`

export const HeroLineWrapper = styled.div`
	height: 1rem;
    margin-top: 1.5rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      margin-top: 0;
    }
`

export const HeroDescription = styled.div`
	max-width: 56.5rem;
	margin-top: calc(1.5rem + 0.25rem + 0.45rem);
	margin-bottom: 3rem;
    line-height: 1.4;
    font-size: ${({ theme }) => theme.sizes.extraSmall};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 2;
        font-size: ${({ theme }) => theme.sizes.body};
	}
`

export const LogoLineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 1;
		justify-content: start;
		margin-bottom: 0;
	}
`

export const LogoPicture = styled.picture`
	display: block;
	align-self: center;
    text-align: center;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		max-width: 20rem;
		position: absolute;
		transform: translateY(-50%);
        align-self: flex-end;
        text-align: right;
	}
`

export const PictureImg = styled.img`
    width: 70%;
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
      width: 100%;
    }
`