import React from 'react'
import { Img } from './styled'

interface PictreImgProps {
    src: string
    alt: string
}

const PictureImg: React.FC<PictreImgProps> = ({ src, alt }) => {
    return <Img src={src} alt={alt} />
}

export default PictureImg
