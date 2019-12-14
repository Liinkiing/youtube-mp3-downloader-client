import { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components'

export const breakpoint = (
  size: 'mobile' | 'tablet' | 'desktop',
  innerCss: FlattenSimpleInterpolation | TemplateStringsArray | CSSObject,
) => {
  let px
  switch (size) {
    case 'mobile':
      px = 320
      break
    case 'tablet':
      px = 768
      break
    case 'desktop':
      px = 992
      break
  }

  return css`
    @media screen and (min-width: ${px}px) {
      ${innerCss}
    }
  `
}

const SCROLLBAR_WIDTH = 16

export const customScrollbar = css`
  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH}px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 ${SCROLLBAR_WIDTH}px ${SCROLLBAR_WIDTH}px transparent;
    border: solid ${SCROLLBAR_WIDTH - 10}px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 ${SCROLLBAR_WIDTH}px ${SCROLLBAR_WIDTH}px rgba(187, 187, 190, 0.38);
    border: solid ${SCROLLBAR_WIDTH - 10}px transparent;
    border-radius: ${SCROLLBAR_WIDTH}px;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`
