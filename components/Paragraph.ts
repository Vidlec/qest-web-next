import styled from 'styled-components'

<<<<<<< HEAD
const Paragraph = styled.p`
<<<<<<< HEAD
    font-size: ${({ theme }) => theme.sizes.extraSmall};
=======
    font-size: 1.3rem;
>>>>>>> feat(career) Update Career page to new Strapi
    margin: 0 0 1rem 0;
  
=======
const Paragraph = styled.div`
    font-size: 1.3rem;
    margin: 0 0 3rem 0;

>>>>>>> style(Career) update font sizes, add margins
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