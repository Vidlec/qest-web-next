import styled from 'styled-components'
import Paragraph from 'components/Paragraph'
import Col from 'components/Col'

export const Col404 = styled(Col)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: flex-start;
`

export const Img = styled.img`
    width: 100%;

    @media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		width: 80%;
	}
`

export const Text404 = styled.span`
	position: absolute;
	font-size: 10rem;
	top: calc(25% - 10rem);
	color: ${({theme}) => theme.colors.black};
	right: 5%;
	z-index: -1;
`

export const Heading = styled.h1`
	font-size: 2.2rem;
    margin: 0 0 2rem 0;
`

export const Paragraph404 = styled(Paragraph)`
	font-size: 1.38rem;
    margin-bottom: 3rem;
`

export const Link404 = styled.div`
	margin-bottom: 2.2rem;

    a {
        display: block;
		color: ${({ theme }) => theme.colors.mainBackground};
		background-color: ${({ theme }) => theme.colors.red};
		padding: .9rem 4rem .6rem 4rem;
        font-size: 1.38rem;
	}
`