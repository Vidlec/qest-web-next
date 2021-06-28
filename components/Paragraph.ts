import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.sizes.extraSmall};
    font-size: 1.3rem;
    margin: 0 0 1rem 0;

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
      font-size: ${({ theme }) => theme.sizes.body};
    }
    @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 2.2rem;
	}
`

export default Paragraph