import styled from 'styled-components'
import Paragraph from 'components/Paragraph'

export const Wrapper = styled.div`
  .uppercase {
    text-transform: uppercase;
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