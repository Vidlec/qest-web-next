import { CaseStudy as CaseStudyType } from 'gql/generated/types'
import React from 'react'
import { ContentText, Title, Wrapper, WrapperWithPicture } from './styled'

const CaseStudy: React.FC<Partial<CaseStudyType>> = ({ title }) => {
    return (
        <Wrapper>
            <WrapperWithPicture>
                <ContentText>
                    <Title>{title}</Title>
                </ContentText>
            </WrapperWithPicture>
        </Wrapper>
    )
}

export default CaseStudy
