import styled from 'styled-components'
import Col from 'components/Col'
import Row from 'components/Row'
import Container from 'components/Container'
import Line from 'components/Line'
import Headline from 'components/Headline'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export interface StyledProps {
    spacing?: number;
    rows?: number;
}

export const ColorText = styled.span<{ colorHash: string | null | undefined }>`
	font-size: inherit;
	color: ${(props) => props.colorHash};
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
export const HeroLineWrapper = styled.div`
	height: 1rem;
    margin-top: 1.5rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      margin-top: 0;
    }
`

export const HeroLine = styled(Line)`
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		display: none;
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
export const ArrowLinkWrapper = styled.div`
	margin: auto;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 3;
        margin-top: 0;
	}
`
export const ArrowLink = styled(AnchorLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ArrowDownIcon = styled.img`
	transform: rotate(90deg);
	width: 49px;
	margin-bottom: 24px;
`
export const WeAreDescription = styled.div`
	letter-spacing: 0;
	margin-bottom: 2rem;
	font-size: ${({ theme }) => theme.sizes.extraSmall};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.body};
		line-height: 2.75rem;
	}
`
export const WeAreRow = styled(Row)`
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 9rem;
`
export const CarouselCol = styled(Col)`
	justify-content: center;
	align-items: center;
	position: relative;
`
export const CarouselPicture = styled.picture`
	width: 21.7rem;
	display: block !important;

	img {
		margin: auto;
		width: 50%;

        @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
          width: 100%;  
        }
      
		@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
			width: auto;
		}
	}
`
export const CarouselLine = styled(Line)`
	top: calc(50%);
	transform: translateY(-50%);
	margin: 0;
`
export const SkillsRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`
export const SkillsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`
export const SkillsListItem = styled.li``
export const SkillHeadline = styled.h2`
	margin: 0;
	line-height: 1;
	font-size: ${({ theme }) => theme.sizes.body};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.medium};
	}
`
export const SkillDescription = styled.p`
	margin: 0 0 2rem 0;
	font-size: ${({ theme }) => theme.sizes.extraSmall};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.body};
	}
`
export const TechnologiesCard = styled.div`
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`
export const TechnologiesPicture = styled.picture`
	position: absolute;
	right: 1rem;
	top: calc(100% - 3rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		transform: rotate(180deg);
		bottom: calc(100% - 4rem);
		top: unset;
	}
`
export const TechnologiesDescription = styled.div`
	margin: 0 0 2rem;
	color: ${({ theme }) => theme.colors.green};
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem;
`

export const HQDescription = styled.div`
	margin-bottom: 2rem;
	font-size: ${({ theme }) => theme.sizes.extraSmall};

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: ${({ theme }) => theme.sizes.body};
	}
`
export const HQWeAreHereDescription = styled.div`
	font-size: ${({ theme }) => theme.sizes.extraSmall};
`
export const HQWeAreHerePicture = styled.picture`
  margin-right: .8rem;
`
export const HQWeAreHereCol = styled.div`
	display: flex;
	align-items: center;
`
export const CareerDescription = styled.div`
	margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.sizes.extraSmall};

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        font-size: ${({ theme }) => theme.sizes.body};
    }
`

export const ArrowRightWrapper = styled.button`
    position: relative;
    z-index: 1;
    float: right;
    cursor: pointer;
    background: none;
    border: 0;
    color: #fff;
    margin-top: .8rem;
    
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      margin-top: -2rem;
    }
`

export const ArrowRightIcon = styled.img`
	width: 75px;
	height: 20px;
	display: block;
	margin: 0 0 1rem auto;
`

export const ArrowLabel = styled.span`
	font-size: ${({ theme }) => theme.sizes.extraSmall};
`

export const CareerCTA = styled.a`
	display: flex;
	align-items: center;
	flex-direction: column;
    cursor: pointer;
  
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		flex-direction: row;
      
        span {
          font-size: ${({ theme }) => theme.sizes.medium};
        }
	}

	span {
      font-size: ${({ theme }) => theme.sizes.body};
		font-weight: bold;
		color: ${({ theme }) => theme.colors.red};
		text-decoration: underline;
	}
`
export const BlogPostsContainer = styled.div`
	width: 100%;
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      display: flex;
      flex-wrap: nowrap;
      
      & > * + * {
        margin-left: 5rem; // The equivalent of gap: 5rem;
      }
    }
`
export const BlogPostWrapper = styled.article`
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: 0;
    margin-top: 5rem;
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        margin-top: 0;
    }
`
export const BlogPostThumbnail = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
	background-position: center top;
	background-size: cover;
	width: 100%;
	padding-top: 67%;
`
export const BlogPostTitle = styled.h2`
	max-width: 100%;
	text-align: center;
	color: ${({ theme }) => theme.colors.blue};
	margin-top: 2rem;
	font-size: 1.5rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      margin-top: 3rem;
    }
`
export const BlogPostSnippet = styled.div`
	max-width: 100%;
	text-align: center;
	color: ${({ theme }) => theme.colors.mainFont};
	margin-top: 1rem;
	font-size: 1rem;
	line-height: 1.2rem;
`
export const MoreBlogPostsContainer = styled.div`
	margin-top: 5rem;
	text-align: center;
`
export const MoreBlogPosts = styled.a`
	text-transform: uppercase;
	line-height: 1.5rem;
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.blue}`};
	:hover {
		border-bottom: 1px solid transparent;
	}
`

export const HQGallery = styled.div`
	display: grid !important;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
	gap: 1rem;
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, minmax(0, 1fr));
    } 
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      height: 50vh;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: repeat(4, minmax(0, 1fr));
    }
`

export const HQImg = styled.img<StyledProps>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: span ${props => props.rows} / span ${props => props.rows};
  
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
      padding: ${props => props.spacing}rem 0 ${props => props.spacing}rem 0;
      grid-row: span ${props => props.rows} / span ${props => props.rows};
    }
`