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
          {/** TODO: Use static image */}
          <Img src={t('404:image.url')} alt={t('404:image.alternativeText')} />
          <Text404>{t('404:text')}</Text404>
        </Col404>
        <Col404 mobile={12} ipad={6}>
          <Heading>{t('404:heading')}</Heading>
          <Paragraph404
            dangerouslySetInnerHTML={{
              __html: t('404:description'),
            }}
          />
          <Link404>
            <Link href="/">{t('404:homePageLinkText')}</Link>
          </Link404>
        </Col404>
      </Row>
    </Container>
  )
}

export default PageNotFoundContent
