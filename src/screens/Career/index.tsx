import Col from 'components/Col'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Headline from 'components/Headline'
import TechnologiesCard from 'components/TechnologiesCard'
import Text from 'components/Text'
import {
  CareerOfferings,
  CareerQuery,
  ComponentContentPictureList,
  UploadFile,
} from 'gql/generated/types'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import { StyledCareerWhy, StyledLongHeadLine, StyledMarginRow, StyledWhyLink } from './styled'
import PictureList from './_components/PictureList'
import SquareList, { StyledContactUs, StyledEndHead } from './_components/SquareList'

const CareerPage: React.FC<CareerQuery> = ({ career }) => {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <Container>
        <StyledMarginRow>
          <Col mobile={12} desktopSmall={7} desktop={8}>
            <Headline color={'green'}>{career?.title}</Headline>
            <Text
              dangerouslySetInnerHTML={{
                __html: career?.description as string,
              }}
            />
          </Col>
          <Col>
            <TechnologiesCard
              floatImage={t<string, UploadFile>('about.technologiesImage', {
                returnObjects: true,
              })}
              technologies={career?.technologies?.technologies}
              description={career?.technologies?.description}
              images={career?.technologies?.images as UploadFile[]}
              handIsOnMiddle
            />
          </Col>
        </StyledMarginRow>
        <Headline>{career?.careerWho}</Headline>
        <SquareList squares={career?.careerPositions as CareerOfferings[]}>
          <StyledEndHead>{career?.somethingElseHeading}</StyledEndHead>
          <p>{career?.somethingElseDescription}</p>
          <Link href="/contacts">
            <StyledContactUs>{career?.somethingElseContact}</StyledContactUs>
          </Link>
        </SquareList>

        <StyledCareerWhy>
          {career?.careerWhy}
          <Link href="/reference" passHref>
            <StyledWhyLink>{career?.careerWhyLook}</StyledWhyLink>
          </Link>
        </StyledCareerWhy>

        <StyledLongHeadLine>{career?.careerWhatHeading}</StyledLongHeadLine>
        <PictureList items={career?.info as ComponentContentPictureList[]} />
      </Container>
      <Footer />
    </>
  )
}

export default CareerPage
