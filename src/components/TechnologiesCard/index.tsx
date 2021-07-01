import PictureImg from 'components/PictureImg'
import React from 'react'
import { Card, Description, Heading, Picture } from './styled'

interface Props {
    src: string
    alt: string
    heading?: string
    __html?: string
    handIsOnMiddle?: boolean
}

const TechnologiesCard: React.FC<Props> = ({ src, alt, handIsOnMiddle, heading, __html }) => {
    return (
        <Card>
            <Picture handIsOnMiddle={handIsOnMiddle}>
                <PictureImg src={src} alt={alt} />
            </Picture>
            {heading ? <Heading>{heading}</Heading> : null}
            {__html ? <Description dangerouslySetInnerHTML={{ __html: __html }} /> : null}
        </Card>
    )
}

export default TechnologiesCard
