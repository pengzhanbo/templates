import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --c-bg: rgba(255, 255, 255);
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  :root {
    scroll-behavior: smooth;
  }

  #root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
export default GlobalStyle
