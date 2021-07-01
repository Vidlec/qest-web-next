import * as React from 'react'
import { CareerOfferings, CareerOfferQuery } from 'gql/generated/types'
import Header from 'components/Header'
import Footer from 'components/Footer'
import {
	StyledBlock,
	StyledLink,
	StyledList,
	StyledTechnologies,
	StyledSubTitle,
	StyledContent,
} from './styled'
import Container from 'components/Container'
import Headline, {ItemColor} from 'components/Headline'
import Row from 'components/Row'
import Col from 'components/Col'

export interface Props {
	careerOffer: CareerOfferings
}

const CareerOffer: React.FC<Props> = ({ careerOffer }) => {
	const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']

	return (
		<>
			<Header />
			<Container>
				<StyledBlock>
					<Headline color={colors[3]}>
						{careerOffer.title}
					</Headline>
					<StyledContent
						dangerouslySetInnerHTML={{
							__html: careerOffer.description as string,
						}}
					/>
				</StyledBlock>
				<Row>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<StyledBlock>
							<StyledSubTitle>
								{careerOffer.careerTechnologiesTitle}
							</StyledSubTitle>
							<StyledTechnologies
								dangerouslySetInnerHTML={{
									__html: careerOffer.careerTechnologiesContent as string,
								}}
							/>
						</StyledBlock>
						<StyledBlock>
							<StyledSubTitle>
								{careerOffer.careerExpectedSkillsTitle}
							</StyledSubTitle>
							<StyledList
								dangerouslySetInnerHTML={{
									__html: careerOffer.careerExpectedSkillsContent as string,
								}}
							/>
						</StyledBlock>
						<StyledBlock>
							<StyledSubTitle>
								{careerOffer.endTitle}
							</StyledSubTitle>
							<StyledContent
								dangerouslySetInnerHTML={{
									__html: careerOffer.endContent as string,
								}}
							/>
						</StyledBlock>
						<StyledBlock>
							<StyledLink href="/contacts">
								{careerOffer.endCTA}
							</StyledLink>
						</StyledBlock>
					</Col>
					<Col>
						<StyledBlock>
							<StyledSubTitle>
								{careerOffer.careerOfferTitle}
							</StyledSubTitle>
							<StyledContent
								dangerouslySetInnerHTML={{
									__html: careerOffer.careerOfferContent as string,
								}}
							/>
						</StyledBlock>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export default CareerOffer
