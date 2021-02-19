import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    color: ${props => props.theme.niceBlack}; 
  }
`

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class QestWeb extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>QEST</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default QestWeb