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
      font-size: ${({ theme }) => theme.sizes.large};
      
      @media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
        font-size: ${({ theme }) => theme.sizes.pageTitle};
      }
    }
    
    h2 {
      font-size: ${({ theme }) => theme.sizes.medium};
    }
    
    h3 {
      margin: 0;
      font-size: 3rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.h3};
    }

    p {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }

`
