import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: calc(100% + 3.6rem);
  margin: -3.6rem 0 6rem -3.6rem;
  font-size: ${({ theme }) => theme.sizes.small};

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
    font-size: ${({ theme }) => theme.sizes.small};
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    justify-content: flex-start;
  }
`

export const StyledBase = styled.div`
  position: relative;
  width: calc(80% - 3.6rem);
  background-color: ${({ theme }) => theme.colors.black};
  margin: 3.6rem 0 0 3.6rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    width: calc(50% - 3.6rem);
    padding-top: calc(50% - 3.6rem);
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
    width: calc(33.333% - 3.6rem);
    padding-top: calc(33.333% - 3.6rem);
  }
`

export const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.6rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const StyledTitle = styled.div<{ color: string }>`
  margin: 0 0 1.6rem 0;
  color: ${({ color }) => color};

  @media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
    margin: 0 0 3rem 0;
  }
`

export const StyledEnd = styled.div`
  flex-shrink: 1;
  width: calc(80% -3.6rem);
  margin: 3.6rem 0 0 3.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
    width: calc(66.666% - 3.6rem);
  }
`

export const StyledEndHead = styled.h5`
  margin: 0 0 3rem 0;
  font-size: ${({ theme }) => theme.sizes.headingSmall};
  color: ${({ theme }) => theme.colors.lightGray};
`

export const StyledContactUs = styled.a`
  color: ${({ theme }) => theme.colors.red};
  text-decoration: underline;
  font-size: ${({ theme }) => theme.sizes.large};
  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`
