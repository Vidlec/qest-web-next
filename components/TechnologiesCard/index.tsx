import React from 'react'
import { Card, Picture, Description } from './styled'
import PictureImg from 'components/PictureImg'
import {useTranslation} from 'react-i18next'

interface TechnologiesCardProps {
    src: string;
    alt: string;
    __html?: string;
}

const TechnologiesCard: React.FC<TechnologiesCardProps> = ({ src, alt, __html}) => {

    const {t} = useTranslation()

    return (
        <Card>
            <Picture handIsOnMiddle>
                <PictureImg
                    src={t('about.technologiesImage.url')}
                    alt={t(
                        'about.technologiesImage.alternativeText'
                    )}
                />
            </Picture>
            { __html? 
                <Description dangerouslySetInnerHTML={{__html: __html}} />: null
}
        </Card>
    )
    
                       
}

export default TechnologiesCard