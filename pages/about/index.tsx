import React, { useEffect, useState } from 'react'
import Col from 'components/Col'
import { useTranslation } from 'react-i18next'
import { UploadFile } from '../../gql/generated/types'
import Container from 'components/Container'
import SliderWrapper from 'components/Slider/styled'
import {
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
	HQWeAreHereRow,
	HQCTACol,
	BlogPostsContainer,
	MoreBlogPosts,
	MoreBlogPostsContainer,
	BlogPostWrapper,
	HQGallery
} from 'components/About/styled'
import Headline from 'components/Headline'
import Footer from 'components/Footer'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import theme from 'theme'

import AboutHero from 'components/About/Hero'
import Skills from 'components/About/Skills'
import BrandValues from 'components/About/BrandValues'
import BlogPost from 'components/About/BlogPost'
import SlickSlider from 'components/Slider'
import AboutTeam from 'components/About/Team'

import blogPosts from '../../public/posts.json'

const AboutUs: React.FC = () => {
	const { t } = useTranslation()

	const [sliderImages] = useState(
		t<string, UploadFile[]>(
			'about.weAreImageCarousel',
			{ returnObjects: true }
		)
	)

	const [sliderOptions] = useState(
		{
			infinite:true,
			speed: 500,
			slidesToShow:1,
			slidesToScroll:1,
			dots:false,
			arrows:false,
			autoplay:true,
		}
	)

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
				<WeAreRow id='weAre'>
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
							<SlickSlider sliderOptions={sliderOptions} data={sliderImages}/>
						</SliderWrapper>

						<CarouselLine />
					</CarouselCol>
				</WeAreRow>

				<ArrowLinkWrapper>
					<ArrowLink offset={() => 170} href='#QestSkills'>
						<ArrowDownIcon src={t('about.arrow.url')}  alt={t('about.arrow.alternativeText')} />
						<span>{t('about.weAreArrowTitle')}</span>
					</ArrowLink>
				</ArrowLinkWrapper>
			</Container>

			<Container>
				<Headline>{t('about.skillsHeadline')}</Headline>

				<SkillsRow id='QestSkills'>
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

				<HQGallery>
					<img src='https://via.placeholder.com/520x350' alt=''/>
					<img src='https://via.placeholder.com/370x560' alt=''/>
					<img src='https://via.placeholder.com/350x280' alt=''/>
					<img src='https://via.placeholder.com/270x380' alt=''/>
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
								__html: t('about.hqWeAreHereDescription'),
							}}
						/>
					</HQWeAreHereCol>
					<img src='https://via.placeholder.com/350x280' alt=''/>
				</HQGallery>

				<HQWeAreHereRow>
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
					{blogPosts.map((post) => (
						<BlogPostWrapper key={post.link}>
							<BlogPost post={post} />
						</BlogPostWrapper>

					))}
				</BlogPostsContainer>
				<MoreBlogPostsContainer>
					<MoreBlogPosts href={mediumUrl} target='_blank'>
						{t('about.blogReadMore')}
					</MoreBlogPosts>
				</MoreBlogPostsContainer>
			</Container>

			{/*TODO ppremistit na _app opodminkovat na homepage nezbrazovat*/}
			<Footer />
		</>
	)
}

export default AboutUs