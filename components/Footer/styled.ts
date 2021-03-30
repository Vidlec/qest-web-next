import styled from 'styled-components'

export const Wrapper = styled.footer`
	display: flex;
	width: 100%;
	justify-content: center;
	position: relative;
`

export const Line = styled.div`
	background-color: ${({ theme }) => theme.colors.porcelainWhite};
	height: 0.125rem;
	width: 100%;
	position: absolute;
	top: 1.2rem;
	box-shadow: 0 0 8px ${({ theme }) => theme.colors.porcelainWhite};

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		top: 2.7rem;
	}
`

export const Title = styled.h3`
	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		font-size: 4.3rem;
	}
`

export const ArticleWrapper = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		flex-direction: row;
	}
`

export const Column = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		padding-left: 1rem;

		&:nth-child(1) {
			order: 3;
		}
		&:nth-child(2) {
			padding-left: 0;
		}
	}
`

export const Text = styled.p`
	padding-bottom: 1rem;
	margin: 0;
	line-height: 1.7rem;
	white-space: pre-line;
`

export const TextTaxIdentification = styled(Text)`
	font-size: 1rem;
	line-height: 1.2rem;
`

export const IconBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: 2rem 0;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 50%;
		margin: 0;
	}

	svg {
		width: 3.5rem;

		@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
			width: 2.5rem;
		}
	}
`

export const Email = styled.a`
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.merigoldOrange}`};
	line-height: 1.5rem;
	:hover {
		border-bottom: 1px solid transparent;
	}
`

export const Tel = styled.a`
	padding-top: 0.4rem;
	margin: 0;
`
