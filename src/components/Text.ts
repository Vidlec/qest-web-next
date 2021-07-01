import styled from 'styled-components'

const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.sizes.extraSmall};
  margin: 0 0 1rem 0;

  @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
    font-size: ${({ theme }) => theme.sizes.body};
  }
  @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`

export default Paragraph
