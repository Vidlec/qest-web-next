import React from 'react'
import { Article, BottomContent, Title, TopContent, Wrapper } from './styled'

type Props = {
    width: number
    title: string
    topContent: string
    bottomContent: string
}

const Technology: React.FC<Props> = ({ width, title, topContent, bottomContent }) => (
    <Wrapper width={width}>
        <Title>{title}</Title>
        <Article>
            <TopContent>{topContent}</TopContent>
            <BottomContent>{bottomContent}</BottomContent>
        </Article>
    </Wrapper>
)

export default Technology
