import Headline from 'components/Headline'
import styled from 'styled-components'

export const ValuesHeadline = styled(Headline)`
  margin-bottom: 11.25rem;
`
export const ValuesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
export const ValuesColumn = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`
export const ValueDescription = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.extraSmall};

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
    font-size: ${({ theme }) => theme.sizes.body};
  }
`
export const ValueHeadlineWrapper = styled.div`
  margin-bottom: 1.8rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: ${({ theme }) => theme.sizes.medium};
  line-height: 2.3rem;
  text-align: center;
  white-space: pre-wrap;
  z-index: 1;
  padding-top: 0.8rem;
  width: 100%;
  position: absolute;
`
export const ValuePicture = styled.picture`
  position: relative;
  top: -3rem;
  right: 0;
  width: 14rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 9rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
    position: absolute;
    top: -2rem;
    right: 0;
    width: 14rem;
  }
`
