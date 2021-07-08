import Col from 'components/Col'
import Container from 'components/Container'
import Headline from 'components/Headline'
import SlickSlider from 'components/Slider'
import { SliderWrapper } from 'components/Slider/styled'
import { HqGalleryFragment } from 'gql/generated/types'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import * as React from 'react'
import { useTheme } from 'styled-components'
import { MediumPost } from 'utils/data/fetchMediumPosts'
import useWindowSize from 'utils/hooks/useWindowSize'
import BlogPost from './BlogPost'
import BrandValues from './BrandValues'
import AboutHero from './Hero'
import Skills from './Skills'
import {
  ArrowDownIcon,
  ArrowLink,
  ArrowLinkWrapper,
  BlogPostsContainer,
  BlogPostWrapper,
  CareerCTA,
  CareerDescription,
  CarouselCol,
  CarouselLine,
  HQDescription,
  HQGallery,
  HQImg,
  HQWeAreHereCol,
  HQWeAreHereDescription,
  HQWeAreHerePicture,
  MoreBlogPosts,
  MoreBlogPostsContainer,
  PictureImg,
  SkillsRow,
  TechnologiesCard,
  TechnologiesDescription,
  TechnologiesPicture,
  WeAreDescription,
  WeAreRow,
} from './styled'
import AboutTeam from './Team'

const mediumUrl = 'https://medium.com/qest'

// const sliderOptions = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: false,
//   arrows: false,
//   autoplay: true,
// }

const hqSliderOptions = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: false,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        speed: 500,
        fade: false,
        adaptiveHeight: true,
      },
    },
  ],
}

export interface AboutPageProps {
  galleries: HqGalleryFragment[]
  posts: MediumPost[]
}

const Content: React.FC<AboutPageProps> = ({ galleries, posts }) => {
  const { mediaQueriesNumbers } = useTheme()
  const isPhone = useWindowSize(mediaQueriesNumbers.desktopSmall, 100)
  const { t } = useTranslation()

  return (
    <>
      <AboutHero />

      <Container>
        <WeAreRow id="weAre">
          <Col mobile={12} desktopSmall={7}>
            <Headline>{t('about.weAreHeadline')}</Headline>
            <WeAreDescription
              dangerouslySetInnerHTML={{
                __html: t('about.weAreDescription'),
              }}
            />
          </Col>

          <CarouselCol mobile={12} desktopSmall={5} desktop={3}>
            <SliderWrapper>
              {/** TODO: Implement images
               *               <SlickSlider sliderOptions={sliderOptions} arrow={false}>
                {sliderImages.map((image) => (
                  <CarouselPicture key={image.id}>
                    <img src={image.url} alt={image.alternativeText ?? ''} />
                  </CarouselPicture>
                ))}
              </SlickSlider>
               * 
               */}
            </SliderWrapper>

            <CarouselLine />
          </CarouselCol>
        </WeAreRow>

        {!isPhone && (
          <ArrowLinkWrapper>
            <ArrowLink offset={() => 170} href="#QestSkills">
              <ArrowDownIcon src={t('about.arrow.url')} alt={t('about.arrow.alternativeText')} />
              <span>{t('about.weAreArrowTitle')}</span>
            </ArrowLink>
          </ArrowLinkWrapper>
        )}
      </Container>

      <Container>
        <Headline>{t('about.skillsHeadline')}</Headline>

        <SkillsRow id="QestSkills">
          <Col mobile={12} desktopSmall={7}>
            {/** TODO: connect to real data, or hardcode it - to be determined with PO */}
            <Skills
              skills={[{ description: 'test', title: 'test', titleColorHash: 'green', id: '1' }]}
            />
          </Col>

          <Col mobile={12} desktopSmall={5}>
            <TechnologiesCard>
              <TechnologiesPicture>
                <PictureImg
                  src={t('about.technologiesImage.url')}
                  alt={t('about.technologiesImage.alternativeText')}
                />
              </TechnologiesPicture>
              <TechnologiesDescription
                dangerouslySetInnerHTML={{
                  __html: t('about.technologiesDescription'),
                }}
              />
            </TechnologiesCard>
          </Col>
        </SkillsRow>
      </Container>

      <Container>
        {/** TODO: Provide from strapi */}
        <BrandValues brandValues={[]} />
      </Container>

      <Container>
        <Headline>{t('about.teamHeadline')}</Headline>

        <AboutTeam />
      </Container>

      <Container>
        <Headline>{t('about.hqHeadline')}</Headline>

        <HQDescription
          dangerouslySetInnerHTML={{
            __html: t('about.hqDescription'),
          }}
        />

        <SliderWrapper>
          {!isPhone ? (
            <SlickSlider sliderOptions={hqSliderOptions} arrow={true}>
              {galleries.map((collection, index) => (
                <HQGallery key={index}>
                  {collection.galleryCollection?.map((item, index) => (
                    <HQImg
                      key={index}
                      src={item?.images?.url}
                      spacing={item?.spacing}
                      rows={item?.rows}
                    />
                  ))}
                </HQGallery>
              ))}
            </SlickSlider>
          ) : (
            <SlickSlider sliderOptions={hqSliderOptions} arrow={true}>
              {galleries[0].galleryCollection?.map((collection, index) => (
                <HQImg
                  key={index}
                  src={collection?.images?.url}
                  spacing={collection?.spacing}
                  rows={collection?.rows}
                />
              ))}
            </SlickSlider>
          )}
          <HQWeAreHereCol>
            <HQWeAreHerePicture>
              <PictureImg
                src={t('about.hqWeAreHereImage.url')}
                alt={t('about.hqWeAreHereImage.alternativeText')}
              />
            </HQWeAreHerePicture>

            <HQWeAreHereDescription
              dangerouslySetInnerHTML={{
                __html: t('about.hqWeAreHereDescription'),
              }}
            />
          </HQWeAreHereCol>
        </SliderWrapper>
      </Container>

      <Container>
        <Headline>{t('about.careerHeadline')}</Headline>

        <CareerDescription
          dangerouslySetInnerHTML={{
            __html: t('about.careerDescription'),
          }}
        />

        <Link href="/career" passHref>
          <CareerCTA>
            <span>{t('about.careerCTATitle')}</span>
            <img
              src={t('about.careerCTAImage.url')}
              alt={t('about.careerCTAImage.alternativeText')}
            />
          </CareerCTA>
        </Link>
      </Container>

      <Container>
        <Headline>{t('about.blogHeadline')}</Headline>
        <BlogPostsContainer>
          {posts.map((post) => (
            <BlogPostWrapper key={post.link}>
              <BlogPost post={post} />
            </BlogPostWrapper>
          ))}
        </BlogPostsContainer>
        <MoreBlogPostsContainer>
          <MoreBlogPosts href={mediumUrl} target="_blank">
            {t('about.blogReadMore')}
          </MoreBlogPosts>
        </MoreBlogPostsContainer>
      </Container>
    </>
  )
}

export default Content
