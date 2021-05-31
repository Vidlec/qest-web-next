import styled from 'styled-components'

export const Paragraph = styled.p`
    padding: 100px 0 0 0;
    margin: 0 0 100px 0;
    font-size: 2rem;
`

export const ShowMoreButton = styled.button`
	border: none;
	padding: none;
	margin: none;
	background: none;
    color: ${({theme}) => theme.colors.mainFont};
    font-size: 1.4rem;
`
