import { createGlobalStyle } from 'styled-components'
import bootstrap from '~/styles/bootstrap'
import { theme } from '~/styles/themes'

export default createGlobalStyle`
  ${bootstrap};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 80%;
    @media screen and (min-width: 771px) {
      font-size: 100%;
    }
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

  #notifications {
    position: fixed;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    z-index: 10000;
    align-items: center;
    display: none;
    &.visible {
      display: flex;
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
    line-height: 4rem;
    margin-bottom: 2rem;
  }
  h2 {
    color: ${props => theme(props).colors.darkBlue};
  }
  h1 + h2 {
    margin-top: -1.6rem;
  }
  h2 + h3 {
    margin-top: 0.5rem;
  }
  a {
  text-decoration: none;
  }
  p {
    color: ${props => theme(props).colors.secondary};
    margin: 1.25rem 0;
  }
  p + p {
    margin-top: -0.5rem;
  }
`
