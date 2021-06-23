import styled from 'styled-components'

const Paragraph = styled.p`
<<<<<<< HEAD
    font-size: ${({ theme }) => theme.sizes.extraSmall};
=======
    font-size: 1.3rem;
>>>>>>> feat(career) Update Career page to new Strapi
    margin: 0 0 1rem 0;
  
    a {
        text-decoration: underline;
    }

<<<<<<< HEAD
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
      font-size: ${({ theme }) => theme.sizes.body};
    }
=======
    @media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 2.2rem;
	}
>>>>>>> feat(career) Update Career page to new Strapi
`

export default Paragraph