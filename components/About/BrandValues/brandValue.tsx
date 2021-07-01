import React from 'react'
import {BrandValue} from 'gql/generated/types'
import { PictureImg } from 'components/About/styled'
import {
    ValueDescription,
    ValueHeadline,
    ValueHeadlineWrapper,
    ValueNumber,
    ValuePicture, ValuesColumn
} from './styled'

interface Props {
    value: BrandValue
}

const AboutBrandValue: React.FC<Props> = ({ value }) => {
    return (
        <>
            <ValuesColumn key={value.id}>
                <ValueHeadlineWrapper>
                    <ValueNumber>
                        {value.backgroundNumber}
                    </ValueNumber>

                    <ValueHeadline>{value.headline}</ValueHeadline>

                    <ValuePicture>
                        <PictureImg
                            src={value.image?.url}
                            alt={value.image?.alternativeText ?? ''}
                        />
                    </ValuePicture>
                </ValueHeadlineWrapper>

                <ValueDescription>
                    {value.description}
                </ValueDescription>
            </ValuesColumn>
        </>
    )
}

export default AboutBrandValue
