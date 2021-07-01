import styled from 'styled-components'
import Headline from 'components/Headline'
import Row from 'components/Row'
import Paragraph from 'components/Paragraph'

export const StyledLongHeadLine = styled(Headline)`
	@media (max-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		&&& {
			font-size: ${({ theme }) => theme.sizes.medium};
		}
	}
`

export const StyledMarginRow = styled(Row)`
	margin: 0 0 6rem 0;
`

export const StyledCareerWhy = styled(Paragraph)`
	margin: 0 0 6rem 0;
`
export const StyledWhyLink = styled.a`
	text-decoration: underline;
`
