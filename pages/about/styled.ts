import styled from 'styled-components'
import { Col } from 'components/Col'
import { Row } from 'components/Row'
import { Container } from 'components/Container'
import { Line } from 'components/Line'
import { Headline } from 'components/Headline'

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

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 1;
		justify-content: start;
		margin-bottom: 0;
	}
`
export const LogoPicture = styled.picture`
	display: block;
	align-self: end;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		max-width: 19.5625rem; //calc(var(--containerWidth) - var(--marginLeft));
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
	font-size: 3.5625rem; // 57px;
	max-width: 52.5625rem; // 841px;
	margin: 1rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		margin-top: 24rem;
	}
`
export const HeroLineWrapper = styled.div`
	height: 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		display: none;
	}
`
export const HeroDescription = styled.div`
	max-width: 56.5625rem; // 905px;
	margin-top: calc(1.5625rem + 0.25rem + 0.45rem);
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 2;
	}
`
export const ArrowLinkWrapper = styled.div`
	margin: auto;
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
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
	margin: 0;
`
export const WeAreRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`
export const CarouselCol = styled(Col)`
	//width: 27.6875rem; // 443px;
	//height: 21.875rem; // 350px;
	//display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`
export const CarouselPicture = styled.picture`
	width: 21.6875rem; // 347px;
	display: block !important;
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
	right: 0;
	top: calc(100% - 1rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		transform: rotate(180deg);
		bottom: calc(100% - 1rem);
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

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
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
export const HQDescription = styled.p`
	margin-bottom: 3rem;
`
export const CareerDescription = styled.p`
	margin-bottom: 3rem;
`
export const CareerCTA = styled.a`
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
