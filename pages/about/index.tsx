import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Col } from 'components/Col'
import { Row } from 'components/Row'
import { Line } from 'components/Line'
import { useTranslation } from 'react-i18next'
import { gql } from 'apollo-boost'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import apolloClient from '../../gql/apollo'
import { BrandValue, Skill, UploadFile } from '../../gql/generated/types'
import Slider from 'react-slick'
import numberOrDefault from 'components/numberOrDefault'

interface IAbout {
	skills: Skill[]
	brandValues: BrandValue[]
	weAreImageCarousel: UploadFile[]
}
const AboutUs: React.FC<IAbout> = (props: IAbout) => {
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
			descriptionLink.addEventListener('mouseleave', (e) =>
				resumeSlider(sliderRef.current)
			)
		}

		return () => {
			for (const descriptionLink of descriptionLinks) {
				descriptionLink.removeEventListener('mouseenter', (e) =>
					moveSlickToIndex(e, sliderRef.current)
				)
				descriptionLink.addEventListener('mouseleave', (e) =>
					resumeSlider(sliderRef.current)
				)
			}
		}
	}, [weAreDescriptionRef, sliderRef])

	return (
		<>
			<Wrapper>
				{/*<Navigation />*/}
				<HeroContainer>
					<HeroHeadline>
						<span>{t('about.heroHeadlineTop')}</span>
						<HeroLineWrapper>
							<Line />
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
						<Col mobile={12} desktop={7}>
							<WeAreDescription
								dangerouslySetInnerHTML={{
									__html: t('about.weAreDescription'),
								}}
								ref={weAreDescriptionRef}
							/>
						</Col>

						<CloudCol mobile={12} desktop={5}>
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
								{props.weAreImageCarousel.map((image) => (
									<CloudPicture key={image.id}>
										<PictureImg
											src={image.url}
											alt={image.alternativeText ?? ''}
										/>
									</CloudPicture>
								))}
							</Slider>

							<CloudLine />
						</CloudCol>
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
						<Col mobile={12} desktop={7}>
							<p>{t('about.skillsDescription')}</p>

							<SkillsList>
								{props.skills.map((skill) => (
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

						<Col mobile={12} desktop={5}>
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
										__html: t(
											'about.technologiesDescription'
										),
									}}
								/>
							</TechnologiesCard>
						</Col>
					</SkillsRow>
				</Container>

				<Container>
					<ValuesHeadline>{t('about.valuesHeadline')}</ValuesHeadline>

					<ValuesWrapper>
						{props.brandValues.map((value) => (
							<ValuesColumn key={value.id}>
								<ValueHeadlineWrapper>
									<ValueNumber>
										{value.backgroundNumber}
									</ValueNumber>

									<ValueHeadline>
										{value.headline}
									</ValueHeadline>

									<ValuePicture>
										<PictureImg
											src={value.image?.url}
											alt={
												value.image?.alternativeText ??
												''
											}
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

					<HQDescription>{t('about.hqDescription')}</HQDescription>

					{/*	TODO grid component*/}
				</Container>

				<Container>
					<Headline>{t('about.careerHeadline')}</Headline>

					<CareerDescription>
						{t('about.careerDescription')}
					</CareerDescription>

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
			</Wrapper>
		</>
	)
}

export default AboutUs

export async function getStaticProps(
	context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IAbout>> {
	// TODO refactor gql to separate file
	const { data } = await apolloClient.query({
		query: gql`
			query {
				skills {
					id
					title
					description
					titleColorHash
				}

				brandValues {
					id
					headline
					backgroundNumber
					image {
						url
					}
					description
				}

				aboutWeAreImageCarousel {
					weAreImageCarousel {
						id
						url
						alternativeText
					}
				}
			}
		`,
	})

	return {
		props: {
			skills: data.skills,
			brandValues: data.brandValues,
			weAreImageCarousel: data.aboutWeAreImageCarousel.weAreImageCarousel,
		},
	}
}

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

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
`

export const Container = styled.section`
	width: 100%;
	margin: 0 auto 13.875rem auto;
	padding: 0 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		max-width: ${({ theme }) => theme.mediaQueries.mobileLarge};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		max-width: ${({ theme }) => theme.mediaQueries.ipad};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktopSmall};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktop};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktopLarge};
	}
`

const Headline = styled.h1`
	color: #cccccc;
	font-size: 4.375rem; // 70px;
	font-weight: bold;
	letter-spacing: 0;
	//margin: 24rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);
	line-height: 1;
	margin-bottom: 3.6875rem; // 59px;
	margin-top: 0;
`

//TODO rename color names to more accurate name
export const YellowText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.yellow};
`
export const RedText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.red};
`
export const BlueText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.blue};
`
export const GreenText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.green};
`

const PinkText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.pink};
`

const ColorText = styled.span<{ colorHash: string | null | undefined }>`
	font-size: inherit;
	color: ${(props) => props.colorHash};
`

export const LogoLineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 1;
		justify-content: start;
		margin-bottom: 0;
	}
`

const LogoPicture = styled.picture`
	display: block;
	align-self: end;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		max-width: 19.5625rem; //calc(var(--containerWidth) - var(--marginLeft));
		position: absolute;
		transform: translateY(-50%);
	}
`

const PictureImg = styled.img`
	width: 100%;
`

const HeroContainer = styled(Container)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const HeroHeadline = styled(Headline)`
	font-size: 3.5625rem; // 57px;
	max-width: 52.5625rem; // 841px;
	margin: 1rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		margin-top: 24rem;
	}
`

const HeroLineWrapper = styled.div`
	height: 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		display: none;
	}
`

const HeroDescription = styled.p`
	max-width: 56.5625rem; // 905px;
	margin-top: calc(1.5625rem + 0.25rem + 0.45rem);
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 2;
	}
`

const ArrowLinkWrapper = styled.div`
	margin: auto;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 3;
	}
`

const ArrowLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ArrowIcon = styled.img`
	height: 49px;
`

const WeAreDescription = styled.p`
	font-size: 2.1875rem; // 35px;
	letter-spacing: 0;
	line-height: 2.75rem; //44px;
	margin: 0;
`

const WeAreRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`

const CloudCol = styled(Col)`
	//width: 27.6875rem; // 443px;
	//height: 21.875rem; // 350px;
	//display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	.slick-list,
	.slick-slider,
	.slick-track {
		position: relative;
		display: block;
	}

	.slick-loading .slick-slide,
	.slick-loading .slick-track {
		visibility: hidden;
	}

	.slick-slider {
		box-sizing: border-box;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-touch-callout: none;
		-khtml-user-select: none;
		-ms-touch-action: pan-y;
		touch-action: pan-y;
		-webkit-tap-highlight-color: transparent;
	}

	.slick-list {
		overflow: hidden;
		margin: 0;
		padding: 0;
	}

	.slick-list:focus {
		outline: 0;
	}

	.slick-list.dragging {
		cursor: pointer;
		cursor: hand;
	}

	.slick-slider .slick-list,
	.slick-slider .slick-track {
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		-o-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}

	.slick-track {
		top: 0;
		left: 0;
	}

	.slick-track:after,
	.slick-track:before {
		display: table;
		content: '';
	}

	.slick-track:after {
		clear: both;
	}

	.slick-slide {
		display: none;
		float: left;
		height: 100%;
		min-height: 1px;
	}

	[dir='rtl'] .slick-slide {
		float: right;
	}

	.slick-slide img {
		display: block;
	}

	.slick-slide.slick-loading img {
		display: none;
	}

	.slick-slide.dragging img {
		pointer-events: none;
	}

	.slick-initialized .slick-slide {
		display: block;
	}

	.slick-vertical .slick-slide {
		display: block;
		height: auto;
		border: 1px solid transparent;
	}

	.slick-arrow.slick-hidden {
		display: none;
	}

	/*# sourceMappingURL=slick.min.css.map */

	@charset 'UTF-8';
	.slick-dots,
	.slick-next,
	.slick-prev {
		position: absolute;
		display: block;
		padding: 0;
	}
	.slick-dots li button:before,
	.slick-next:before,
	.slick-prev:before {
		font-family: slick;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.slick-loading .slick-list {
		background: url(ajax-loader.gif) center center no-repeat #fff;
	}
	@font-face {
		font-family: slick;
		font-weight: 400;
		font-style: normal;
		src: url(fonts/slick.eot);
		src: url(fonts/slick.eot?#iefix) format('embedded-opentype'),
			url(fonts/slick.woff) format('woff'),
			url(fonts/slick.ttf) format('truetype'),
			url(fonts/slick.svg#slick) format('svg');
	}
	.slick-next,
	.slick-prev {
		font-size: 0;
		line-height: 0;
		top: 50%;
		width: 20px;
		height: 20px;
		-webkit-transform: translate(0, -50%);
		-ms-transform: translate(0, -50%);
		transform: translate(0, -50%);
		cursor: pointer;
		color: transparent;
		border: none;
		outline: 0;
		background: 0 0;
	}
	.slick-next:focus,
	.slick-next:hover,
	.slick-prev:focus,
	.slick-prev:hover {
		color: transparent;
		outline: 0;
		background: 0 0;
	}
	.slick-next:focus:before,
	.slick-next:hover:before,
	.slick-prev:focus:before,
	.slick-prev:hover:before {
		opacity: 1;
	}
	.slick-next.slick-disabled:before,
	.slick-prev.slick-disabled:before {
		opacity: 0.25;
	}
	.slick-next:before,
	.slick-prev:before {
		font-size: 20px;
		line-height: 1;
		opacity: 0.75;
		color: #fff;
	}
	.slick-prev {
		left: -25px;
	}
	[dir='rtl'] .slick-prev {
		right: -25px;
		left: auto;
	}
	.slick-prev:before {
		content: '←';
	}
	.slick-next:before,
	[dir='rtl'] .slick-prev:before {
		content: '→';
	}
	.slick-next {
		right: -25px;
	}
	[dir='rtl'] .slick-next {
		right: auto;
		left: -25px;
	}
	[dir='rtl'] .slick-next:before {
		content: '←';
	}
	.slick-dotted.slick-slider {
		margin-bottom: 30px;
	}
	.slick-dots {
		bottom: -25px;
		width: 100%;
		margin: 0;
		list-style: none;
		text-align: center;
	}
	.slick-dots li {
		position: relative;
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 0 5px;
		padding: 0;
		cursor: pointer;
	}
	.slick-dots li button {
		font-size: 0;
		line-height: 0;
		display: block;
		width: 20px;
		height: 20px;
		padding: 5px;
		cursor: pointer;
		color: transparent;
		border: 0;
		outline: 0;
		background: 0 0;
	}
	.slick-dots li button:focus,
	.slick-dots li button:hover {
		outline: 0;
	}
	.slick-dots li button:focus:before,
	.slick-dots li button:hover:before {
		opacity: 1;
	}
	.slick-dots li button:before {
		font-size: 6px;
		line-height: 20px;
		position: absolute;
		top: 0;
		left: 0;
		width: 20px;
		height: 20px;
		content: '•';
		text-align: center;
		opacity: 0.25;
		color: #000;
	}
	.slick-dots li.slick-active button:before {
		opacity: 0.75;
		color: #000;
	} /*# sourceMappingURL=slick-theme.min.css.map */
`

const CloudPicture = styled.picture`
	width: 21.6875rem; // 347px;
	display: block !important;
`

const CloudLine = styled(Line)`
	top: calc(50%);
	transform: translateY(-50%);
	margin: 0;
`

const SkillsRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`

const SkillsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const SkillsListItem = styled.li`
	margin-bottom: 2rem; // TODO use value from design
`

const SkillHeadline = styled.h2`
	font-size: 2rem;
	margin: 0;
	line-height: 1;
`
const SkillDescription = styled.p`
	margin: 0;
`

const TechnologiesCard = styled.div`
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`

const TechnologiesPicture = styled.picture`
	position: absolute;
	right: 0;
	top: calc(100% - 1rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		transform: rotate(180deg);
		bottom: calc(100% - 1rem);
		top: unset;
	}
`

const TechnologiesDescription = styled.p`
	margin: 0 0 2rem;
	color: ${({ theme }) => theme.colors.green};
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem; //20px;
`

const ValuesHeadline = styled(Headline)`
	margin-bottom: 11.25rem;
`

const ValuesWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
`

const ValuesColumn = styled.div`
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 17.5rem; // 280px;
	}
`
const ValueDescription = styled.p`
	text-align: center;
`
const ValueHeadlineWrapper = styled.div`
	margin-bottom: 1.875rem;
	position: relative;
	display: flex;
`
const ValueNumber = styled.div`
	color: ${({ theme }) => theme.colors.black};
	font-size: 13rem;
	line-height: 1;
	font-weight: bold;
`
const ValueHeadline = styled.div`
	letter-spacing: 0;
	font-weight: bold;
	font-size: 2.1875rem; //35px;
	line-height: 2.375rem; // 38px;
	text-align: center;
	white-space: pre-wrap;
	z-index: 1;
	padding-top: 0.875rem; // TODO use value from design
	width: 100%;
	position: absolute;
`
const ValuePicture = styled.picture`
	position: absolute;
	right: 0;
`

const HQDescription = styled.p`
	margin-bottom: 3rem;
`

const CareerDescription = styled.p`
	margin-bottom: 3rem;
`

const CareerCTA = styled.a`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		flex-direction: row;
	}

	span {
		font-size: 2.1875rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.red};
		text-decoration: underline;
	}
`
