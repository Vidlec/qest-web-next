import React, { useEffect, useState } from 'react'
import Col from 'components/Col'
import { useTranslation } from 'react-i18next'
import { BrandValue, Skill, UploadFile } from '../../gql/generated/types'
import Slider from 'react-slick'
import numberOrNull from 'components/numberOrNull'
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
	CarouselPicture,
	ColorText,
	HQDescription,
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
	HQWeAreHereCol,
	ArrowRightIcon,
	HQWeAreHereDescription,
	HQWeAreHerePicture,
	HQWeAreHereRow,
	HQCTACol,
	BlogPostThumbnail,
	BlogPostsContainer,
	BlogPostWrapper,
	BlogPostTitle,
	BlogPostSnippet,
	MoreBlogPosts,
	MoreBlogPostsContainer,
} from 'components/About/styled'
import Headline from 'components/Headline'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import theme from 'theme'
import AboutHero from 'components/About/Hero'

import blogPosts from '../../public/posts.json'

const AboutUs: React.FC = () => {
	const { t } = useTranslation()

	const [sliderRef, setSliderRef] = useState<Slider | null>(null)
	const [
		weAreDescriptionRef,
		setWeAreDescriptionRef,
	] = useState<HTMLParagraphElement | null>(null)

	const mediumUrl = 'https://medium.com/qest'

	useEffect(() => {
		const descriptionLinks =
			weAreDescriptionRef?.querySelectorAll('[data-sliderIndex]') ?? []

		for (const descriptionLink of descriptionLinks) {
			descriptionLink.addEventListener('mouseenter', (e) =>
				moveSlickToIndex(e, sliderRef)
			)
			descriptionLink.addEventListener('mouseleave', () =>
				resumeSlider(sliderRef)
			)
		}

		return () => {
			for (const descriptionLink of descriptionLinks) {
				descriptionLink.removeEventListener('mouseenter', (e) =>
					moveSlickToIndex(e, sliderRef)
				)
				descriptionLink.addEventListener('mouseleave', () =>
					resumeSlider(sliderRef)
				)
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
								{t<string, UploadFile[]>(
									'about.weAreImageCarousel',
									{ returnObjects: true }
								).map((image) => (
									<CarouselPicture key={image.id}>
										<img
											src={image.url}
											alt={image.alternativeText ?? ''}
										/>
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
							}).map((skill) => (
								<SkillsListItem key={skill.id}>
									<SkillHeadline>
										<ColorText
											colorHash={skill.titleColorHash}
										>
											{skill.title}
										</ColorText>
									</SkillHeadline>
									<SkillDescription>
										{skill.description}
									</SkillDescription>
								</SkillsListItem>
							))}
						</SkillsList>
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
				<ValuesHeadline>{t('about.valuesHeadline')}</ValuesHeadline>

				<ValuesWrapper>
					{t<string, BrandValue[]>('about.brandValues', {
						returnObjects: true,
					}).map((value) => (
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
						}).map((image) => (
							<picture key={image.id}>
								<PictureImg
									src={image.url}
									alt={image.alternativeText ?? ''}
								/>
							</picture>
						))}
					</Masonry>
				</ResponsiveMasonry>

				<HQWeAreHereRow>
					<HQWeAreHereCol mobile={12} ipad={6} desktopSmall={4}>
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
							<a href={post.link} target="_blank">
								<BlogPostThumbnail src={post.img} />
								<BlogPostTitle>
									{post.title
										.split(' — ')
										.map((titleLine, index) => (
											<div key={index}>{titleLine}</div>
										))}
								</BlogPostTitle>
								<BlogPostSnippet>
									{post.snippet}
								</BlogPostSnippet>
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
