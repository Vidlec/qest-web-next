import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  margin: 0 auto 13.8rem auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    max-width: ${({ theme }) => theme.mediaQueries.mobileLarge};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
    max-width: ${({ theme }) => theme.mediaQueries.ipad};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
    max-width: ${({ theme }) => theme.mediaQueries.desktopSmall};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    max-width: ${({ theme }) => theme.mediaQueries.desktop};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
    max-width: ${({ theme }) => theme.mediaQueries.desktopLarge};
  }
`
export default Container
