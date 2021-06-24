import { CaseStudy as CaseStudyType } from 'gql/generated/types'
import React from 'react'
import {
    About,
    ContentPicture,
    ContentText,
    Description,
    Line,
    Subtitle,
    Title,
    Wrapper,
    WrapperWithPicture,
} from './styled'

interface Props {
    industry: string
    client: string
    system: string
}

const CaseStudy: React.FC<Partial<CaseStudyType> & Props> = ({
    title,
    subtitle,
    about,
    industry,
    client,
    system,
    mainImage,
}) => {
    return (
        <Wrapper>
            <WrapperWithPicture>
                <ContentText>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <About>{about}</About>
                </ContentText>
                <Description>
                    <Line></Line>
                    <section>
                        <span>{industry}</span>
                        <p>{industry}</p>
                    </section>
                    <section>
                        <span>{client}</span>
                        <p>{client}</p>
                    </section>
                    <section>
                        <span>{system}</span>
                        <p>{system}</p>
                    </section>
                </Description>
                <ContentPicture>
                    <img src={mainImage?.url} alt={title} />
                </ContentPicture>
            </WrapperWithPicture>
        </Wrapper>
    )
}

export default CaseStudy
