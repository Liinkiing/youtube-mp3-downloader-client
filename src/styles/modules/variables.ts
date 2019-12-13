import { css } from 'styled-components'
import { theme } from '../themes'

export const MAIN_SHADOW = css`
  box-shadow: 2px 2px 15px rgba(224, 224, 224, 0.4);
`

export const FOCUS_STATE = (color: string) => css`
  &:focus {
    outline-style: none;
    border: 5px solid ${color};
  }
`

export const LINKS_FOCUS_STATE = css`
  ${props => FOCUS_STATE(theme(props).colors.secondary)};
  &:focus {
    border-radius: ${props => theme(props).borderRadius};
    padding: 10px;
  }
`
