import * as React from 'react'
import useWindowSize from 'hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { Form } from 'components/Form'
import Header from 'components/Header'
import Footer from 'components/Footer'
import AboutHero from 'components/About/Hero'
import Container from 'components/Container'
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
    CarouselPicture,
    HQDescription,
    HQGallery,
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
    HQImg,
} from 'components/About/styled'
import Col from 'components/Col'
import Headline from 'components/Headline'
import {SliderWrapper} from 'components/Slider/styled'
import SlickSlider from 'components/Slider'
import Skills from 'components/About/Skills'
import BrandValues from 'components/About/BrandValues'
import AboutTeam from 'components/About/Team'
import Link from 'next/link'
import blogPosts from '../../public/posts.json'
import BlogPost from 'components/About/BlogPost'
import {useTranslation} from 'react-i18next'
import {useEffect, useState} from 'react'
import {HqGallery, UploadFile} from '../../gql/generated/types'

interface Props {
    galleries: HqGallery[]
}

const AboutPage: React.FC<Props> = ({ galleries }) => {
    const { mediaQueriesNumbers } = useTheme()
    const isPhone = useWindowSize(mediaQueriesNumbers.desktopSmall, 100)
    const { t } = useTranslation()

    const [sliderImages] = useState(
        t<string, UploadFile[]>('about.weAreImageCarousel', {
            returnObjects: true,
        })
    )

    const [sliderOptions] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
    })

    const [HqSliderOptions] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: false,
    })

    const [
        weAreDescriptionRef,
        setWeAreDescriptionRef,
    ] = useState<HTMLParagraphElement | null>(null)

    const mediumUrl = 'https://medium.com/qest'

    useEffect(() => {
        const descriptionLinks =
            weAreDescriptionRef?.querySelectorAll('[data-sliderIndex]') ?? []
    }, [weAreDescriptionRef])

    return (
        <>
            <Header />

            <AboutHero />

            <Container>
                <WeAreRow id="weAre">
                    <Col mobile={12} desktopSmall={7}>
                        <Headline>{t('about.weAreHeadline')}</Headline>
                        <WeAreDescription
                            dangerouslySetInnerHTML={{
                                __html: t('about.weAreDescription'),
                            }}
                            ref={setWeAreDescriptionRef}
                        />
                    </Col>

                    <CarouselCol mobile={12} desktopSmall={5} desktop={3}>
                        <SliderWrapper>
                            <SlickSlider sliderOptions={sliderOptions} arrow={false}>
                                {sliderImages.map((image) => (
                                    <CarouselPicture key={image.id}>
                                        <img
                                            src={image.url}
                                            alt={image.alternativeText ?? ''}
                                        />
                                    </CarouselPicture>
                                ))}
                            </SlickSlider>
                        </SliderWrapper>

                        <CarouselLine />
                    </CarouselCol>
                </WeAreRow>

                {!isPhone &&
                    <ArrowLinkWrapper>
                        <ArrowLink offset={() => 170} href="#QestSkills">
                            <ArrowDownIcon
                                src={t('about.arrow.url')}
                                alt={t('about.arrow.alternativeText')}
                            />
                            <span>{t('about.weAreArrowTitle')}</span>
                        </ArrowLink>
                    </ArrowLinkWrapper>
                }
            </Container>

            <Container>
                <Headline>{t('about.skillsHeadline')}</Headline>

                <SkillsRow id="QestSkills">
                    <Col mobile={12} desktopSmall={7}>
                        <Skills />
                    </Col>

                    <Col mobile={12} desktopSmall={5}>
                        <TechnologiesCard>
                            <TechnologiesPicture>
                                <PictureImg
                                    src={t('about.technologiesImage.url')}
                                    alt={t(
                                        'about.technologiesImage.alternativeText'
                                    )}
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
                <BrandValues />
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
                    <SlickSlider sliderOptions={HqSliderOptions} arrow={true}>
                        {galleries.map((collection, index) => (
                            <HQGallery key={collection.id}>
                                {collection.galleryCollection?.map((item, index) => (
                                    <>
                                        {item?.images === null ?
                                        <HQWeAreHereCol>
                                            <HQWeAreHerePicture>
                                                <PictureImg
                                                    src={t('about.hqWeAreHereImage.url')}
                                                    alt={t(
                                                        'about.hqWeAreHereImage.alternativeText'
                                                    )}
                                                />
                                            </HQWeAreHerePicture>

                                            <HQWeAreHereDescription
                                                dangerouslySetInnerHTML={{
                                                    __html: t(
                                                        'about.hqWeAreHereDescription'
                                                    ),
                                                }}
                                            />
                                        </HQWeAreHereCol> :
                                        <HQImg <any>
                                            src={item?.images!.url}
                                            spacing={item?.spacing}
                                            rows={item?.rows}
                                        />
                                        }
                                    </>
                                ))}
                            </HQGallery>
                        ))}
                    </SlickSlider>
                </SliderWrapper>
            </Container>

            <Container>
                <Headline>{t('about.careerHeadline')}</Headline>

                <CareerDescription
                    dangerouslySetInnerHTML={{
                        __html: t('about.careerDescription'),
                    }}
                />

                <Link href='/career'>
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
                    {blogPosts.map((post) => (
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

            <Footer />
            <Form />
        </>
    )
}

export default AboutPage
