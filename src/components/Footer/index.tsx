import { Facebook, Instagram, Linkedin, Twitter } from '@styled-icons/boxicons-logos'
import { useTranslation } from 'next-i18next'
import React from 'react'
import {
  ArticleWrapper,
  Column,
  Email,
  FooterContainer,
  FooterHead,
  IconBox,
  Line,
  Tel,
  Text,
  TextTaxIdentification,
  Title,
  TitleWrapper,
  Wrapper,
} from './styled'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Line />
      <FooterContainer>
        <TitleWrapper>
          <Title>{t('contact.title')}</Title>
          <FooterHead src={t('contact.footerImg.url')} />
        </TitleWrapper>
        <ArticleWrapper>
          <Column>
            <Email href={'mailto:' + t('contact.email')}>{t('contact.email')}</Email>
            <Tel href={'tel:' + t('contact.phoneNumber')}>{t('contact.phoneNumber')}</Tel>
            <IconBox>
              <a href={t('socialNetworkUrls.Facebook.url')} target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href={t('socialNetworkUrls.Twitter.url')} target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a href={t('socialNetworkUrls.Instagram.url')} target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href={t('socialNetworkUrls.Linkedin.url')} target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </IconBox>
          </Column>

          <Column>
            <Text>{t('contact.address')}</Text>
          </Column>

          <Column>
            <Text>{t('contact.taxIdentificationNumbers')}</Text>
            <TextTaxIdentification>
              {t('contact.taxIdentificationDescription')}
            </TextTaxIdentification>
          </Column>
        </ArticleWrapper>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
