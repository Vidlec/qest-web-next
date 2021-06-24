import Line from 'components/Line'
import React from 'react'
import {
    Button,
    ClickText,
    Logo,
    PictureLogo,
    SlideStopWrapper,
    TextLogo,
    WrapperLogoTexts,
} from './styled'

interface Props {
    descriptionAboveLine: string
    descriptionBellowLine: string
    clickToStop: string
    logo: { uri: string }
}

const HomePageContent: React.FC<Props> = ({
    descriptionAboveLine,
    descriptionBellowLine,
    logo,
    clickToStop,
}) => {
    return (
        <>
            <WrapperLogoTexts>
                <TextLogo>{descriptionAboveLine}</TextLogo>
                <TextLogo>{descriptionBellowLine}</TextLogo>
            </WrapperLogoTexts>
            <Logo>
                <PictureLogo src={logo.uri} alt="qest logo" />
                <Line />
            </Logo>
            <SlideStopWrapper>
                <Button>8</Button>
                <ClickText href={'/'}>{clickToStop}</ClickText>
            </SlideStopWrapper>
        </>
    )
}

export default HomePageContent
