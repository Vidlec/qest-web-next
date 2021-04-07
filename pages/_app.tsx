import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {
	I18nextProvider,
	withTranslation,
	WithTranslation,
} from 'react-i18next'

import i18n from '../locale'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
  	font-family: sportingGrotesque;
  	src: url("/assets/fonts/SportingGrotesque-Bold.otf");
	font-weight: bold;
  }
  @font-face {
  	font-family: sportingGrotesque;
  	src: url("/assets/fonts/SportingGrotesque-Regular.otf");
	font-weight: normal;
  }
  @font-face {
  	font-family: wingdings2;
  	src: url("/assets/fonts/Wingdings2.ttf")
  }
  @font-face {
  	font-family: sourceCodeVariable;
  	src: url("/assets/fonts/SourceCodeVariable-Roman.otf")
  }
  
  html {
	font-size: 10px;
	
    @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		font-size: 16px;
    }
  }
  
  body {
    margin: 0 auto;
	background-color: ${({ theme }) => theme.colors.softBlack};
	font-family: sportingGrotesque, Tahoma, Sans-Serif;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.porcelainWhite};
    
  	* {
	  	box-sizing: border-box;
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.porcelainWhite};
	}
	button {
		outline: none;
	}
	h3 {
		margin: 0;
		font-size: 1.8rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.merigoldOrange};
	}
	p{
	  	margin: 0; 
	}
  }
`

class QestWeb extends App<WithTranslation> {
	render() {
		const { Component, pageProps, t } = this.props

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

export default withTranslation()(QestWeb)
