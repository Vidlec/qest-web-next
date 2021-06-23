import styled from 'styled-components'
import Paragraph from 'components/Paragraph'

export const Container = styled.div`
	width: 100%;
	margin: -1.8rem -1.8rem 2rem -1.8rem;
	font-size: 2.2rem;
	line-height: 3rem;
	overflow: hidden;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		font-size: 1.8rem;
	}

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		font-size: 2.2rem;
	}
`

export const Wrapper = styled.div`
	width: calc(100% + 3.6rem);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		justify-content: flex-start;
	}
`

export const Base = styled.div`
	position: relative;
	width: calc(80% - 3.6rem);
	background-color: ${({ theme }) => theme.colors.black};
	margin: 1.8rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		width: calc(50% - 3.6rem);
		padding-top: calc(50% - 3.6rem);
	}

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: calc(33.333% - 3.6rem);
		padding-top: calc(33.333% - 3.6rem);
	}
`

export const Content = styled.div`
	width: 100%;
	height: 100%;
	padding: 2.6rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		position: absolute;
		top: 0;
		left: 0;
	}
`

export const Title = styled.div<{ color: string }>`
	margin: 0 0 3rem 0;
	color: ${({ color }) => color};
`

export const End = styled.div`
	flex-shrink: 1;
	width: 80%;
	padding: 0 1.8rem;
	justify-self: flex-end;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: 66.66%;
	}
`

export const EndHead = styled.h5`
	margin: 1.8rem 0 3rem 0;
	font-size: 2.7rem;
	color: ${({ theme }) => theme.colors.lightGray};
`
export const ContactUs = styled.a`
	color: ${({ theme }) => theme.colors.red};
	text-decoration: underline;
	font-size: 4.4rem;
	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		font-size: 2rem;
	}
`