import React from 'react'
import { useTranslation } from 'react-i18next'
import {
	FooterContainer,
	Column,
	ArticleWrapper,
	TitleWrapper,
	Title,
	FooterHead,
	Wrapper,
	Line,
	Text,
	Tel,
	IconBox,
	Email,
	TextTaxIdentification,
} from './styled'
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from '@styled-icons/boxicons-logos'
import Container from 'components/Container'

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
						<Email href={'mailto:' + t('contact.email')}>
							{t('contact.email')}
						</Email>
						<Tel href={'tel:' + t('contact.phoneNumber')}>
							{t('contact.phoneNumber')}
						</Tel>
						<IconBox>
							<a
								href={t('socialNetworkUrls.Facebook.url')}
								target="_blank"
								rel="noreferrer"
							>
								<Facebook />
							</a>
							<a
								href={t('socialNetworkUrls.Twitter.url')}
								target="_blank"
								rel="noreferrer"
							>
								<Twitter />
							</a>
							<a
								href={t('socialNetworkUrls.Instagram.url')}
								target="_blank"
								rel="noreferrer"
							>
								<Instagram />
							</a>
							<a
								href={t('socialNetworkUrls.Linkedin.url')}
								target="_blank"
								rel="noreferrer"
							>
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
