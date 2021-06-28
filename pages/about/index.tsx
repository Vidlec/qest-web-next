import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Col from 'components/Col'
import { request } from 'graphql-request'
import { useTranslation } from 'react-i18next'
import { UploadFile, HqGallery } from '../../gql/generated/types'
import { HQGALLERIES_QUERY } from '../../gql/queries/hqgalleries'
import Container from 'components/Container'
import { SliderWrapper } from 'components/Slider/styled'
import {
	ArrowRightWrapper,
	ArrowDownIcon,
	ArrowLink,
	ArrowLinkWrapper,
	CareerCTA,
	CareerDescription,
	CarouselCol,
	CarouselLine,
	HQDescription,
	PictureImg,
	SkillsRow,
	TechnologiesCard,
	TechnologiesDescription,
	TechnologiesPicture,
	WeAreDescription,
	WeAreRow,
	HQWeAreHereCol,
	ArrowRightIcon,
	HQWeAreHereDescription,
	HQWeAreHerePicture,
	ArrowLabel,
	BlogPostsContainer,
	MoreBlogPosts,
	MoreBlogPostsContainer,
	BlogPostWrapper,
	HQGallery,
	CarouselPicture,
} from 'components/About/styled'
import Headline from 'components/Headline'
import Footer from 'components/Footer'

import AboutHero from 'components/About/Hero'
import Skills from 'components/About/Skills'
import BrandValues from 'components/About/BrandValues'
import BlogPost from 'components/About/BlogPost'
import SlickSlider from 'components/Slider'
import AboutTeam from 'components/About/Team'

import blogPosts from '../../public/posts.json'

import Slider from 'react-slick'

interface Props {
	galleries: HqGallery[]
}

const AboutUs: React.FC<Props> = ({ galleries }) => {
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

				<ArrowLinkWrapper>
					<ArrowLink offset={() => 170} href="#QestSkills">
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
							<HQGallery>
								{collection.galleryCollection.map((item, index) => (
									<>
										{index === 4 &&
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
										</HQWeAreHereCol>
										}
										<img
											src={item.images.url}
											alt=""
										/>
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

			{/*TODO ppremistit na _app opodminkovat na homepage nezbrazovat*/}
			<Footer />
		</>
	)
}

export const getStaticProps = async () => {
	const data = await request<HqGallery>(
		process.env.CMS_GRAPHQL_URL!,
		HQGALLERIES_QUERY
	)

	return {
		props: { galleries: data.hqGalleries },
	}
}

export default AboutUs
