import styled from 'styled-components'
import Paragraph from 'components/Paragraph'

export const SubTitle = styled.h2`
  text-transform: uppercase;
`

export const Content = styled.div`
  font-size: ${({ theme }) => theme.sizes.extraSmall};
  margin: 0 0 1rem 0;

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    font-size: ${({ theme }) => theme.sizes.body};
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.green};
  padding: 0 .5rem .1rem 0;
  height: 35px;
  display: inline-block;
  border-bottom: solid .13rem;
`

export const Technologies = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.green};
`

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  
  li::before {
    content: "·"; 
    padding-right: .65rem;
    color: ${({ theme }) => theme.colors.green};
  }
`

export const Block = styled.div`
  padding-bottom: 1.4rem;  
`