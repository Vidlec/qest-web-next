import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const WrapperWithPicture = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    width: 71.25rem;
    flex-wrap: wrap;
    flex-direction: row;

    div:nth-child(1) {
      width: 50%;
    }

    div:nth-child(2) {
      order: 3;
      width: 100%;
    }

    div:nth-child(3) {
      width: 50%;
    }
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 0;
  margin-bottom: 3rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.h1};
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 3rem;
  padding: 0 1rem 0 1rem;
  line-height: 0;
`

export const About = styled.p`
  margin-bottom: 4rem;
  padding: 1rem;
`

export const Line = styled.article`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.mainFont};
  position: absolute;
  top: 1rem;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 4rem;

  section {
    width: 22%;
    text-align: center;
    z-index: 1;

    p {
      margin: 0;
    }

    span {
      padding: 0 1rem 0 1rem;
      background-color: ${({ theme }) => theme.colors.mainBackground};
      color: ${({ theme }) => theme.colors.caseStudyComplementaryColor};
    }
  }
`

export const ContentPicture = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 4rem;

  img {
    width: 27rem;
    object-fit: contain;
  }
`
