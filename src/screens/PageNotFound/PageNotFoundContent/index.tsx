import Container from 'components/Container'
import Row from 'components/Row'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import { Col404, Heading, Img, Link404, Paragraph404, Text404 } from './styled'

const PageNotFoundContent: React.FC = () => {
    const { t } = useTranslation()

    return (
        <Container>
            <Row>
                <Col404 mobile={12} ipad={6}>
                    <Img src={t('page404s.image.url')} alt={t('page404s.image.alternativeText')} />
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
