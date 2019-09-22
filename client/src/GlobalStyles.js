import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 60px;
    @media screen and (max-width: 800px) {
       padding: 10px;
    }
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
  * {
    box-sizing: border-box;
    font-family: 'Open Sans Condensed', serif !important;
  }
  
  a {
      text-decoration: none;
      color: black;
  }
`
