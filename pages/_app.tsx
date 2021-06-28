import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import {
	I18nextProvider,
	withTranslation,
	WithTranslation,
} from 'react-i18next'
import i18n from '../locale'
import theme from '../theme'
import { GlobalStyle } from 'theme/globalStyle'
import withRouter from 'next/dist/client/with-router'

class QestWeb extends App<WithTranslation> {
	render() {
		const { Component, pageProps, t, router } = this.props
		return (
			<>
				<Head>
					<title>{t('header.title')}</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content={t('header.description')}
					/>
				</Head>
				<ThemeProvider theme={theme}>
					<I18nextProvider i18n={i18n}>
							<GlobalStyle />
							<Component {...pageProps} />
					</I18nextProvider>
				</ThemeProvider>
			</>
		)
	}
}

export default withTranslation()(withRouter(QestWeb))
