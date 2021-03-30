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

  body {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.niceBlack};
    background-color: ${({ theme }) => theme.colors.softBlack};
    font-family: sportingGrotesque, Tahoma, Sans-Serif;
    
    * {
      box-sizing: border-box;
      font-size: 1.5rem;
		  color: ${({ theme }) => theme.colors.porcelainWhite};
    }

    a {
      text-decoration: none; 
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
	  	color: ${({ theme }) => theme.colors.merigoldOrange};
	  }
}
`
