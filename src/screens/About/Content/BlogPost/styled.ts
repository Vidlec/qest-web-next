import styled from 'styled-components'

export const BlogPostSnippet = styled.div`
  max-width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainFont};
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.2rem;
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
