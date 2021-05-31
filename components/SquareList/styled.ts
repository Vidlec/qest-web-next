import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
    margin: -1.8rem;
    font-size: 2.4rem;
    width: 100%;
`

export const Base = styled.div`
    position: relative;
    width: calc( 100% - 3.6rem );
	padding-top: calc( 100% - 3.6rem );
	background-color: ${({theme}) => theme.colors.black};
    margin: 1.8rem;

    @media ( min-width: ${({theme}) => theme.mediaQueries.mobileLarge}){
        width: calc( 50% - 3.6rem );
	    padding-top: calc( 50% - 3.6rem );
    }

    @media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: calc( 33.333% - 3.6rem );
	    padding-top: calc( 33.333% - 3.6rem );
	}
`

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
    padding: 2.6rem;
`

export const Title = styled.div`
    margin: 0 0 1rem 0;
`

export const End = styled.div`
    flex-shrink: 1;
    width: 100%;
    padding: 0 1.8rem;

    @media ( min-width: ${({theme}) => theme.mediaQueries.desktopSmall}){
        width: 66.66%;
    }

    h5 {
        margin: 1.8rem 0 .8rem 0;
        font-size: 2.7rem;
        color: ${({theme}) => theme.colors.lightGray}
    }

    a {
        color: ${({theme}) => theme.colors.red};
        text-decoration: underline;
    }
`
