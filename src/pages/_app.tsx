import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'theme/globalStyle'
import theme from '../theme'

const QestWeb: React.FC<AppProps> = (props) => {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <title>Title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="description" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default QestWeb
