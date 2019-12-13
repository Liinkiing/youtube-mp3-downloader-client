import { createGlobalStyle } from 'styled-components'
import bootstrap from '~/styles/bootstrap'
import { MAIN_BACKGROUND } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'

export default createGlobalStyle`
  ${bootstrap};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    ${MAIN_BACKGROUND};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    & > #__next {
      flex: 1;
      & > .router__wrapper {
        height: 100vh;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: ${props => theme(props).colors.primary};
    font-family: inherit;
  }
`
