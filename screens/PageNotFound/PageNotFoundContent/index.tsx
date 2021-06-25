import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Container from 'components/Container'
import Row from 'components/Row'
import { Col404, Img, Heading, Paragraph404, Link404, Text404 } from './styled'

const PageNotFoundContent: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Container>
			<Row>
				<Col404 mobile={12} ipad={6}>
					<Img
						src={t('page404s.image.url')}
						alt={t('page404s.image.alternativeText')}
					/>
					<Text404>{t('page404s.bgText')}</Text404>
				</Col404>
				<Col404 mobile={12} ipad={6}>
					<Heading>{t('page404s.heading')}</Heading>
					<Paragraph404
						dangerouslySetInnerHTML={{
							__html: t('page404s.description'),
						}}
					/>
					<Link404>
						<Link href="/">{t('page404s.link')}</Link>
					</Link404>
				</Col404>
			</Row>
		</Container>
	)
}

export default PageNotFoundContent
