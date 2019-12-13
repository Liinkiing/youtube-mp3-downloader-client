import { css } from 'styled-components'

export const ripple = css`
  --circle-color: whitesmoke;
  --circle-radius: 0;
  &.rippling {
    transition: --circle-color 0.6s, --circle-radius 0.6s;
    --circle-color: transparent;
    --circle-radius: 300;
  }
`
