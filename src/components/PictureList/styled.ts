import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;

  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    flex-direction: row;
  }
`
export const Heading = styled.h5`
  font-weight: 600;
  font-size: 2.2rem;
  margin: 0 0 2.4rem 0;
`

export const Description = styled.p`
  margin: 0;
  line-height: 3rem;
`

export const ItemIndex = styled.div<{ color: string }>`
  position: relative;
  margin: 0 6rem 0 0;
  color: ${({ color }) => color};
  width: 18rem;

  span {
    position: absolute;
    width: 100%;
    display: block;
    font-size: 12rem;
    text-align: center;
    line-height: 12rem;
  }
`

export const ItemImg = styled.img`
  width: 100%;
  margin-top: 20%;
`

export const ItemInformation = styled.div`
  width: 100%;
  flex-shrink: 1;
`
