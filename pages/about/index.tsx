import React, { useEffect, useRef } from 'react'
import { Col } from 'components/Col'
import { Line } from 'components/Line'
import { useTranslation } from 'react-i18next'
import { BrandValue, Skill, UploadFile } from '../../gql/generated/types'
import Slider from 'react-slick'
import numberOrDefault from 'components/numberOrDefault'
import { Container } from 'components/Container'
import { SliderWrapper } from 'components/Slider/styled'
import {
	SelectLanguageWrapper,
	ArrowIcon,
	ArrowLink,
	ArrowLinkWrapper,
	CareerCTA,
	CareerDescription,
	CarouselCol,
	CarouselLine,
	CarouselPicture,
	ColorText,
	HeroContainer,
	HeroDescription,
	HeroHeadline,
	HeroLine,
	HeroLineWrapper,
	HQDescription,
	LogoLineWrapper,
	LogoPicture,
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
} from 'pages/about/styled'
import { Headline } from 'components/Headline'
import SelectLanguage from 'components/SelectLanguage'
import Footer from 'components/Footer'

const AboutUs: React.FC = () => {
	const { t } = useTranslation()

	const sliderRef = useRef<Slider>(null)
	const weAreDescriptionRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		const descriptionLinks =
			weAreDescriptionRef.current?.querySelectorAll(
				'[data-sliderIndex]'
			) ?? []

		for (const descriptionLink of descriptionLinks) {
			descriptionLink.addEventListener('mouseenter', (e) =>
				moveSlickToIndex(e, sliderRef.current)
			)
			descriptionLink.addEventListener('mouseleave', () =>
				resumeSlider(sliderRef.current)
			)
		}

		return () => {
			for (const descriptionLink of descriptionLinks) {
				descriptionLink.removeEventListener('mouseenter', (e) =>
					moveSlickToIndex(e, sliderRef.current)
				)
				descriptionLink.addEventListener('mouseleave', () =>
					resumeSlider(sliderRef.current)
				)
			}
		}
	}, [weAreDescriptionRef, sliderRef])

	return (
		<>
			<HeroContainer>
				<SelectLanguageWrapper>
					<SelectLanguage />
				</SelectLanguageWrapper>

				<HeroHeadline>
					<span>{t('about.heroHeadlineTop')}</span>
					<HeroLineWrapper>
						<HeroLine />
					</HeroLineWrapper>
					<span>{t('about.heroHeadlineBottom')}</span>
				</HeroHeadline>

				<HeroDescription
					dangerouslySetInnerHTML={{
						__html: t('about.heroDescription'),
					}}
				/>

				<LogoLineWrapper>
					<LogoPicture>
						<PictureImg
							src={t('about.heroLogo.url')}
							alt={t('about.heroLogo.alternativeText')}
						/>
					</LogoPicture>

					<Line />
				</LogoLineWrapper>

				<ArrowLinkWrapper>
					<ArrowLink href={'#'}>
						<ArrowIcon />
						<span>{t('about.heroArrowTitle')}</span>
					</ArrowLink>
				</ArrowLinkWrapper>
			</HeroContainer>

			<Container>
				<Headline>{t('about.weAreHeadline')}</Headline>

				<WeAreRow>
					<Col mobile={12} desktopSmall={7}>
						<WeAreDescription
							dangerouslySetInnerHTML={{
								__html: t('about.weAreDescription'),
							}}
							ref={weAreDescriptionRef}
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
								ref={sliderRef}
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
						<ArrowIcon />
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
				{/*	TODO grid component*/}
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
				{/*	TODO load from api*/}
			</Container>

			<Footer />
		</>
	)
}

export default AboutUs

function moveSlickToIndex(e: Event, sliderRef: Slider | null) {
	const indexAttr = (e.target as HTMLElement).getAttribute('data-sliderIndex')
	const index = numberOrDefault(indexAttr)

	if (index !== null) {
		sliderRef?.slickPause()
		sliderRef?.slickGoTo(index)
	}
}

function resumeSlider(sliderRef: Slider | null) {
	sliderRef?.slickPlay()
}
