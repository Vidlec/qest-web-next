import styled from 'styled-components'
import Headline from 'components/Headline'

export const LongHeadLine = styled(Headline)`
    @media ( max-width: ${({theme}) => theme.mediaQueries.mobileLarge }) {
        &&& {
            font-size: ${({theme}) => theme.sizes.medium};
        }
    }
` 