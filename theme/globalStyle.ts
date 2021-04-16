import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors.mainBackground};
    font-family: sportingGrotesque, Tahoma, Sans-Serif;
    font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.mainFont};

    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.mainFont};
    }

    button {
      outline: none;
    }

    h1 {
      font-size: 4.375rem;
    }

    h3 {
      margin: 0;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.h3};
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }

`
