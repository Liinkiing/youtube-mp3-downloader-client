import { DefaultTheme } from 'styled-components'
import base from '~/styles/themes/base'

export const primary = '#40E7AA'
export const secondary = '#3E64E1'
export const tint = '#FFF8BC'
export const text = '#57585a'
export const background = '#fffbfa'
export const darkBlue = '#18339A'
export const error = '#FF6CAB'
export const terminalBackground = '#262525'

const theme: DefaultTheme = {
  ...base,
  colors: {
    primary,
    secondary,
    background,
    tint,
    darkBlue,
    error,
    text,
    terminalBackground,
    notifications: {
      error,
    },
  },
}

export default theme
