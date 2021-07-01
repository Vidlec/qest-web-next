import React from 'react'
import { ComponentContentRichText } from 'gql/generated/types'
import { RichTextContainer, RichTextDescription, RichTextSubtitle, RichTextTitle } from './styled'

interface Props {
    richText: ComponentContentRichText
}

const RichText: React.FC<Props> = ({ richText }) => {
    const { desciption, desciptionLevel2, desciptionLevel3, subtitle, title } = richText

    return (
        <RichTextContainer>
            {title && <RichTextTitle>{title}</RichTextTitle>}
            {subtitle && <RichTextSubtitle>{subtitle}</RichTextSubtitle>}
            {desciption && <RichTextDescription>{desciption}</RichTextDescription>}
            {desciptionLevel2 && <RichTextDescription>{desciptionLevel2}</RichTextDescription>}
            {desciptionLevel3 && <RichTextDescription>{desciptionLevel3}</RichTextDescription>}
        </RichTextContainer>
    )
}

export default RichText
