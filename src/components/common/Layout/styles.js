import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', 'Helvetica', sans-serif;
    margin: 0;
    padding: 0;

    iframe, object, embed {
      max-width: 100%;
      max-height: 100%;
      margin-bottom: unset;
      display: block;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }

    a {
      text-decoration: none;
    }
  }
`
