import styled from 'styled-components'
import { Col } from 'components/Col'
import { Row } from 'components/Row'
import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { Headline } from 'components/Headline'

export const SelectLanguageWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 3.75rem 2.5rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		margin-bottom: calc(16rem);
	}
`
export const ColorText = styled.span<{ colorHash: string | null | undefined }>`
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

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 1;
		justify-content: start;
		margin-bottom: 0;
	}
`
export const LogoPicture = styled.picture`
	display: block;
	align-self: end;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		max-width: 20rem; //calc(var(--containerWidth) - var(--marginLeft));
		position: absolute;
		transform: translateY(-50%);
	}
`
export const PictureImg = styled.img`
	width: 100%;
`
export const HeroContainer = styled(Container)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
export const HeroHeadline = styled(Headline)`
	margin: 1rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);
	font-size: 2rem; // 57px;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		font-size: 3.5625rem; // 57px;
		max-width: calc(100% - 20rem - 4rem);
	}
`
export const HeroLineWrapper = styled.div`
	height: 1rem;
`

export const HeroLine = styled(Line)`
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		display: none;
	}
`

export const HeroDescription = styled.div`
	max-width: 56.5625rem; // 905px;
	margin-top: calc(1.5625rem + 0.25rem + 0.45rem);
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 2;
	}
`
export const ArrowLinkWrapper = styled.div`
	margin: auto;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		order: 3;
	}
`
export const ArrowLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const ArrowIcon = styled.img`
	height: 49px;
`
export const WeAreDescription = styled.div`
	font-size: 2.1875rem; // 35px;
	letter-spacing: 0;
	line-height: 2.75rem; //44px;
	margin-bottom: 2rem;
`
export const WeAreRow = styled(Row)`
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 9rem;
`
export const CarouselCol = styled(Col)`
	justify-content: center;
	align-items: center;
	position: relative;
`
export const CarouselPicture = styled.picture`
	width: 21.6875rem; // 347px;
	display: block !important;

	img {
		margin: auto;
		width: 100%;

		@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
			width: auto;
		}
	}
`
export const CarouselLine = styled(Line)`
	top: calc(50%);
	transform: translateY(-50%);
	margin: 0;
`
export const SkillsRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`
export const SkillsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`
export const SkillsListItem = styled.li`
	margin-bottom: 2rem; // TODO use value from design
`
export const SkillHeadline = styled.h2`
	font-size: 2rem;
	margin: 0;
	line-height: 1;
`
export const SkillDescription = styled.p`
	margin: 0;
`
export const TechnologiesCard = styled.div`
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`
export const TechnologiesPicture = styled.picture`
	position: absolute;
	right: 1rem;
	top: calc(100% - 3rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		transform: rotate(180deg);
		bottom: calc(100% - 4rem);
		top: unset;
	}
`
export const TechnologiesDescription = styled.div`
	margin: 0 0 2rem;
	color: ${({ theme }) => theme.colors.green};
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem; //20px;
`
export const ValuesHeadline = styled(Headline)`
	margin-bottom: 11.25rem;
`
export const ValuesWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
`
export const ValuesColumn = styled.div`
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		width: 17.5rem; // 280px;
	}
`
export const ValueDescription = styled.p`
	text-align: center;
`
export const ValueHeadlineWrapper = styled.div`
	margin-bottom: 1.875rem;
	position: relative;
	display: flex;
`
export const ValueNumber = styled.div`
	color: ${({ theme }) => theme.colors.black};
	font-size: 13rem;
	line-height: 1;
	font-weight: bold;
`
export const ValueHeadline = styled.div`
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
export const ValuePicture = styled.picture`
	position: absolute;
	right: 0;
`
export const HQDescription = styled.div`
	margin-bottom: 2rem;
`
export const CareerDescription = styled.div`
	margin-bottom: 2rem;
`
export const CareerCTA = styled.a`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		flex-direction: row;
	}

	span {
		font-size: 2.1875rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.red};
		text-decoration: underline;
	}
`
