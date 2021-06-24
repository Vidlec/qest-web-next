import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.sizes.extraSmall};
    margin: 0 0 1rem 0;
  
    a {
        text-decoration: underline;
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
      font-size: ${({ theme }) => theme.sizes.body};
    }
`

export default Paragraph