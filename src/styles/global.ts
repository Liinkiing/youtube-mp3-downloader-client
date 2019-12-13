import { createGlobalStyle } from 'styled-components'
import bootstrap from '~/styles/bootstrap'
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
    background: ${props => theme(props).colors.background};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    & > #__next {
      flex: 1;
      overflow: hidden;
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
    color: ${props => theme(props).colors.secondary};
    font-family: inherit;
  }
  h1 {
    color: ${props => theme(props).colors.darkBlue};
    font-weight: 800;
    font-size: 3rem;
    max-width: 600px;
    line-height: 4rem;
  }
`
