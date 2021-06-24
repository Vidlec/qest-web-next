import SelectLanguage from 'components/SelectLanguage'
import { LanguagesQuery } from 'gql/generated/types'
import React from 'react'
import Line from '../../Line'
import {
    ArrowDownIcon,
    ArrowLink,
    ArrowLinkWrapper,
    HeroContainer,
    HeroDescription,
    HeroHeadline,
    HeroLine,
    HeroLineWrapper,
    LogoLineWrapper,
    LogoPicture,
    PictureImg,
    SelectLanguageWrapper,
} from '../styled'

interface Props {
    headlineTop: string
    headlineBottom: string
    description: string
    arrowTitle: string
    logo: {
        url: string
        alt: string
    }
    languages: LanguagesQuery['languages']
}

const AboutHero: React.FC<Props> = ({
    headlineBottom,
    headlineTop,
    description,
    arrowTitle,
    logo,
    languages,
}) => {
    return (
        <HeroContainer>
            <SelectLanguageWrapper>
                <SelectLanguage languages={languages} />
            </SelectLanguageWrapper>

            <HeroHeadline>
                <span>{headlineTop}</span>
                <HeroLineWrapper>
                    <HeroLine />
                </HeroLineWrapper>
                <span>{headlineBottom}</span>
            </HeroHeadline>

            {/** Dangerously setting description is a big no no! */}
            <HeroDescription
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />

            <LogoLineWrapper>
                <LogoPicture>
                    <PictureImg src={logo.url} alt={logo.alt} />
                </LogoPicture>

                <Line />
            </LogoLineWrapper>

            <ArrowLinkWrapper>
                <ArrowLink href={'#'}>
                    <ArrowDownIcon />
                    <span>{arrowTitle}</span>
                </ArrowLink>
            </ArrowLinkWrapper>
        </HeroContainer>
    )
}

export default AboutHero
