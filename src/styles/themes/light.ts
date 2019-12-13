import { DefaultTheme } from 'styled-components'
import base from '~/styles/themes/base'

export const primary = '#385cea'
export const secondary = '#3bdda2'
export const error = '#ef2f64'
export const background = '#f0f8fa'
export const text = '#57585a'

const theme: DefaultTheme = {
  ...base,
  colors: {
    primary,
    secondary,
    background,
    text,
    notifications: {
      error,
    },
  },
}

export default theme
