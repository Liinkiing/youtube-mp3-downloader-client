import { css } from 'styled-components'

export const ripple = css`
  transition: transform 0.3s, opacity 0.3s;
  --circle-color: rgba(255, 255, 255, 0.5);
  --circle-radius: 0;
  &.rippling {
    transition: transform 0.3s, opacity 0.3s, --circle-color 0.6s, --circle-radius 0.6s;
    --circle-color: transparent;
    --circle-radius: 300;
  }
`
