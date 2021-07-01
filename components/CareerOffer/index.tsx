import React from 'react'
import { CareerOfferings } from 'gql/generated/types'
import { Block, Link, List, Technologies, SubTitle, Content } from './styled'
import Container from 'components/Container'
import Headline, { ItemColor } from 'components/Headline'
import Row from 'components/Row'
import Col from 'components/Col'

type Props = {
	offer: CareerOfferings
}

const CareerOffer: React.FC<Props> = ({ offer }) => {
	const colors: ItemColor[] = ['red', 'yellow', 'pink', 'green', 'blue']

	return (
		<>
			<Container>
				<Block>
					<Headline color={colors[3]}>{offer.title}</Headline>
					<Content
						dangerouslySetInnerHTML={{
							__html: offer.description as string,
						}}
					/>
				</Block>
				<Row>
					<Col mobile={12} desktopSmall={7} desktop={8}>
						<Block>
							<SubTitle>{offer.careerTechnologiesTitle}</SubTitle>
							<Technologies
								dangerouslySetInnerHTML={{
									__html: offer.careerTechnologiesContent as string,
								}}
							/>
						</Block>
						<Block>
							<SubTitle>
								{offer.careerExpectedSkillsTitle}
							</SubTitle>
							<List
								dangerouslySetInnerHTML={{
									__html: offer.careerExpectedSkillsContent as string,
								}}
							/>
						</Block>
						<Block>
							<SubTitle>{offer.endTitle}</SubTitle>
							<Content
								dangerouslySetInnerHTML={{
									__html: offer.endContent as string,
								}}
							/>
						</Block>
						<Block>
							<Link href="/contacts">{offer.endCTA}</Link>
						</Block>
					</Col>
					<Col>
						<Block>
							<SubTitle>{offer.careerOfferTitle}</SubTitle>
							<Content
								dangerouslySetInnerHTML={{
									__html: offer.careerOfferContent as string,
								}}
							/>
						</Block>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default CareerOffer
