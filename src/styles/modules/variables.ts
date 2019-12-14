import { css } from 'styled-components'
import { theme } from '../themes'
import { rgba } from 'polished'

interface ShadowOptions {
  color: string
  shadow: string
}

export const MAIN_BOX_SHADOW = (
  { color, shadow }: Partial<ShadowOptions> = { color: 'rgba(224, 224, 224, 0.4)', shadow: '2px 2px 15px' },
) => css`
  box-shadow: ${shadow} ${color};
`

export const MAIN_BORDER_RADIUS = css`
  border-radius: ${props => theme(props).borderRadius};
`

export const FOCUS_STATE = (color: string, options?: { withShadow: boolean }) => css`
  &:focus {
    outline-style: none;
    border: 5px solid ${color};
    ${options?.withShadow &&
      css`
        box-shadow: 2px 7px 15px rgba(200, 200, 200, 0.8);
      `}
  }
`

export const LINKS_FOCUS_STATE = css`
  ${props => FOCUS_STATE(theme(props).colors.secondary)};
  &:focus {
    ${MAIN_BORDER_RADIUS};
    padding: 10px;
  }
`
