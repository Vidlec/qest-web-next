import AboutHero from 'components/About/Hero'
import {
    ArrowDownIcon,
    ArrowLink,
    ArrowLinkWrapper,
    ArrowRightIcon,
    BlogPostsContainer,
    BlogPostSnippet,
    BlogPostThumbnail,
    BlogPostTitle,
    BlogPostWrapper,
    CareerCTA,
    CareerDescription,
    CarouselCol,
    CarouselLine,
    CarouselPicture,
    ColorText,
    HQCTACol,
    HQDescription,
    HQWeAreHereCol,
    HQWeAreHereDescription,
    HQWeAreHerePicture,
    HQWeAreHereRow,
    MoreBlogPosts,
    MoreBlogPostsContainer,
    PictureImg,
    SkillDescription,
    SkillHeadline,
    SkillsList,
    SkillsListItem,
    SkillsRow,
    TechnologiesCard,
    TechnologiesDescription,
    TechnologiesPicture,
    ValueDescription,
    ValueHeadline,
    ValueHeadlineWrapper,
    ValueNumber,
    ValuePicture,
    ValuesColumn,
    ValuesHeadline,
    ValuesWrapper,
    WeAreDescription,
    WeAreRow,
} from 'components/About/styled'
import Col from 'components/Col'
import Container from 'components/Container'
import Headline from 'components/Headline'
import numberOrNull from 'components/numberOrNull'
import SliderWrapper from 'components/Slider/styled'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Slider from 'react-slick'
import theme from 'theme'
import { fetchMediumPosts, MediumPost } from 'utils/data/fetchMediumPosts'
import { BrandValue, Skill, UploadFile } from '../../gql/generated/types'

const AboutUs: React.FC<{ posts: MediumPost[] }> = ({ posts }) => {
    const { t } = useTranslation()

    const [sliderRef, setSliderRef] = useState<Slider | null>(null)
    const [weAreDescriptionRef, setWeAreDescriptionRef] = useState<HTMLParagraphElement | null>(
        null
    )

    const mediumUrl = 'https://medium.com/qest'

    useEffect(() => {
        const descriptionLinks = weAreDescriptionRef?.querySelectorAll('[data-sliderIndex]') ?? []

        for (const descriptionLink of descriptionLinks) {
            descriptionLink.addEventListener('mouseenter', (e) => moveSlickToIndex(e, sliderRef))
            descriptionLink.addEventListener('mouseleave', () => resumeSlider(sliderRef))
        }

        return () => {
            for (const descriptionLink of descriptionLinks) {
                descriptionLink.removeEventListener('mouseenter', (e) =>
                    moveSlickToIndex(e, sliderRef)
                )
                descriptionLink.addEventListener('mouseleave', () => resumeSlider(sliderRef))
            }
        }
    }, [sliderRef, weAreDescriptionRef])

    return (
        <>
            <AboutHero />
            <Container>
                <Headline>{t('about.weAreHeadline')}</Headline>

                <WeAreRow>
                    <Col mobile={12} desktopSmall={7}>
                        <WeAreDescription
                            dangerouslySetInnerHTML={{
                                __html: t('about.weAreDescription'),
                            }}
                            ref={setWeAreDescriptionRef}
                        />
                    </Col>

                    <CarouselCol mobile={12} desktopSmall={5} desktop={3}>
                        <SliderWrapper>
                            <Slider
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                dots={false}
                                arrows={false}
                                autoplay={true}
                                ref={setSliderRef}
                            >
                                {t<string, UploadFile[]>('about.weAreImageCarousel', {
                                    returnObjects: true,
                                })?.map?.((image) => (
                                    <CarouselPicture key={image.id}>
                                        <img src={image.url} alt={image.alternativeText ?? ''} />
                                    </CarouselPicture>
                                ))}
                            </Slider>
                        </SliderWrapper>
                        <CarouselLine />
                    </CarouselCol>
                </WeAreRow>
                <ArrowLinkWrapper>
                    <ArrowLink href={'#'}>
                        <ArrowDownIcon
                            src={t('about.arrow.url')}
                            alt={t('about.arrow.alternativeText')}
                        />
                        <span>{t('about.weAreArrowTitle')}</span>
                    </ArrowLink>
                </ArrowLinkWrapper>
            </Container>
            <Container>
                <Headline>{t('about.skillsHeadline')}</Headline>

                <SkillsRow>
                    <Col mobile={12} desktopSmall={7}>
                        <p>{t('about.skillsDescription')}</p>

                        <SkillsList>
                            {t<string, Skill[]>('about.skills', {
                                returnObjects: true,
                            })?.map?.((skill) => (
                                <SkillsListItem key={skill.id}>
                                    <SkillHeadline>
                                        <ColorText colorHash={skill.titleColorHash}>
                                            {skill.title}
                                        </ColorText>
                                    </SkillHeadline>
                                    <SkillDescription>{skill.description}</SkillDescription>
                                </SkillsListItem>
                            ))}
                        </SkillsList>
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
                <ValuesHeadline>{t('about.valuesHeadline')}</ValuesHeadline>

                <ValuesWrapper>
                    {t<string, BrandValue[]>('about.brandValues', {
                        returnObjects: true,
                    })?.map?.((value) => (
                        <ValuesColumn key={value.id}>
                            <ValueHeadlineWrapper>
                                <ValueNumber>{value.backgroundNumber}</ValueNumber>

                                <ValueHeadline>{value.headline}</ValueHeadline>

                                <ValuePicture>
                                    <PictureImg
                                        src={value.image?.url}
                                        alt={value.image?.alternativeText ?? ''}
                                    />
                                </ValuePicture>
                            </ValueHeadlineWrapper>

                            <ValueDescription>{value.description}</ValueDescription>
                        </ValuesColumn>
                    ))}
                </ValuesWrapper>
            </Container>
            <Container>
                <Headline>{t('about.teamHeadline')}</Headline>
            </Container>
            <Container>
                <Headline>{t('about.hqHeadline')}</Headline>

                <HQDescription
                    dangerouslySetInnerHTML={{
                        __html: t('about.hqDescription'),
                    }}
                />

                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        [theme.mediaQueriesNumbers.mobile]: 1,
                        [theme.mediaQueriesNumbers.ipad]: 2,
                        [theme.mediaQueriesNumbers.desktop]: 3,
                    }}
                >
                    <Masonry>
                        {t<string, UploadFile[]>('about.hqImageGrid', {
                            returnObjects: true,
                        })?.map?.((image) => (
                            <picture key={image.id}>
                                <PictureImg src={image.url} alt={image.alternativeText ?? ''} />
                            </picture>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>

                <HQWeAreHereRow>
                    <HQWeAreHereCol mobile={12} ipad={6} desktopSmall={4}>
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

                    <HQCTACol mobile={12} ipad={6} desktopSmall={4}>
                        <ArrowRightIcon />
                        <span>{t('about.hqCTATitle')}</span>
                    </HQCTACol>
                </HQWeAreHereRow>
            </Container>
            <Container>
                <Headline>{t('about.careerHeadline')}</Headline>

                <CareerDescription
                    dangerouslySetInnerHTML={{
                        __html: t('about.careerDescription'),
                    }}
                />

                <CareerCTA>
                    <span>{t('about.careerCTATitle')}</span>
                    <img
                        src={t('about.careerCTAImage.url')}
                        alt={t('about.careerCTAImage.alternativeText')}
                    />
                </CareerCTA>
            </Container>
            <Container>
                <Headline>{t('about.blogHeadline')}</Headline>
                <BlogPostsContainer>
                    {posts.map((post) => (
                        <BlogPostWrapper key={post.link}>
                            <a href={post.link} target="_blank" rel="noreferrer">
                                <BlogPostThumbnail src={post.img} />
                                <BlogPostTitle>
                                    {post.title.split(' — ').map((titleLine, index) => (
                                        <div key={index}>{titleLine}</div>
                                    ))}
                                </BlogPostTitle>
                                <BlogPostSnippet>{post.snippet}</BlogPostSnippet>
                            </a>
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

export default AboutUs

export const getStaticProps: GetStaticProps<{ posts: MediumPost[] }> = async () => {
    const posts = await fetchMediumPosts()

    console.log(posts)

    return {
        props: {
            posts,
        },
    }
}

function moveSlickToIndex(e: Event, sliderRef: Slider | null) {
    const indexAttr = (e.target as HTMLElement).getAttribute('data-sliderIndex')
    const index = numberOrNull(indexAttr)

    if (index !== null) {
        sliderRef?.slickPause()
        sliderRef?.slickGoTo(index)
    }
}

function resumeSlider(sliderRef: Slider | null) {
    sliderRef?.slickPlay()
}
