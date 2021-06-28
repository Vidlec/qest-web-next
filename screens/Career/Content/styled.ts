import styled from 'styled-components'
import Headline from 'components/Headline'
import Row from 'components/Row'

export const LongHeadLine = styled(Headline)`
	@media (max-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		&&& {
			font-size: ${({ theme }) => theme.sizes.medium};
		}
	}
`

export const MarginRow = styled(Row)`
	margin: 0 0 6rem 0;
`

export const ShowMore = styled.div`
	display: flex;
	justify-content: center;
`

export const ShowMoreButton = styled.button`
	border: none;
	background: none;
	color: ${({theme}) => theme.colors.purple};
	font-size: ${({theme}) => theme.sizes.large};
`
