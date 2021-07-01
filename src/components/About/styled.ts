import styled from 'styled-components'
import Col from 'components/Col'
import Row from 'components/Row'
import Container from 'components/Container'
import Line from 'components/Line'
import Headline from 'components/Headline'

export const SelectLanguageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 3.75rem 2.5rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        margin-bottom: calc(16rem);
    }
`
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
    align-self: flex-end;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        max-width: 20rem;
        position: absolute;
        transform: translateY(-50%);
    }
`
export const PictureImg = styled.img`
    width: 100%;
`
export const HeroContainer = styled(Container)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
export const HeroHeadline = styled(Headline)`
    margin: 1rem 0 calc(1.5rem - 0.45rem);
    font-size: 2rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        font-size: 3.5rem;
        max-width: calc(100% - 20rem - 4rem);
    }
`
export const HeroLineWrapper = styled.div`
    height: 1rem;
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

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        order: 2;
    }
`
export const ArrowLinkWrapper = styled.div`
    margin: auto;
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        order: 3;
    }
`
export const ArrowLink = styled.a`
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
    font-size: 2.2rem;
    letter-spacing: 0;
    line-height: 2.75rem;
    margin-bottom: 2rem;
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
        width: 100%;

        @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
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
export const SkillsListItem = styled.li`
    margin-bottom: 2rem;
`
export const SkillHeadline = styled.h2`
    font-size: 2rem;
    margin: 0;
    line-height: 1;
`
export const SkillDescription = styled.p`
    margin: 0;
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
export const ValuesHeadline = styled(Headline)`
    margin-bottom: 11.25rem;
`
export const ValuesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
`
export const ValuesColumn = styled.div`
    width: 100%;
    margin-bottom: 3rem;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        width: 17.5rem;
    }
`
export const ValueDescription = styled.p`
    text-align: center;
`
export const ValueHeadlineWrapper = styled.div`
    margin-bottom: 1.8rem;
    position: relative;
    display: flex;
`
export const ValueNumber = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 13rem;
    line-height: 1;
    font-weight: bold;
`
export const ValueHeadline = styled.div`
    letter-spacing: 0;
    font-weight: bold;
    font-size: 2.2rem;
    line-height: 2.3rem;
    text-align: center;
    white-space: pre-wrap;
    z-index: 1;
    padding-top: 0.8rem;
    width: 100%;
    position: absolute;
`
export const ValuePicture = styled.picture`
    position: absolute;
    right: 0;
`
export const HQDescription = styled.div`
    margin-bottom: 2rem;
`
export const HQWeAreHereDescription = styled.div`
    font-size: 1.5rem;
`
export const HQWeAreHerePicture = styled.picture``
export const HQWeAreHereCol = styled(Col)`
    display: flex;
    align-items: center;
`
export const HQCTACol = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: end;
`
export const CareerDescription = styled.div`
    margin-bottom: 2rem;
`
export const ArrowRightIcon = styled.img`
    width: 75px;
    height: 20px;
    display: block;
`
export const HQWeAreHereRow = styled(Row)`
    justify-content: space-between;
`
export const CareerCTA = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
        flex-direction: row;
    }

    span {
        font-size: 2.2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.red};
        text-decoration: underline;
    }
`
export const BlogPostsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    & > * + * {
        margin-left: 5rem; // The equivalent of gap: 5rem;
    }
`
export const BlogPostWrapper = styled.article`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
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
    margin-top: 3rem;
    font-size: 1.5rem;
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
