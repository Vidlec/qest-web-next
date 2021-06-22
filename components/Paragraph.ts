import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.sizes.body};
    margin: 0 0 1rem 0;

    a {
        text-decoration: underline;
    }
`

export default Paragraph