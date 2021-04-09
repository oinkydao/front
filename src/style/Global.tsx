import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
  body div#root > nav{
    background-color: rgb(0 0 0) !important;
  }

  body {
    background-color: rgb(21 31 17);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;

    img {
      height: auto;
      max-width: 100%;
    }
    div h2 {
      color: #fcde59 !important;
   
    }
    
    
  }
`

export default GlobalStyle
