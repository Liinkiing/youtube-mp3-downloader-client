import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: string
      secondary: string
      background: string
      text: string
      tint: string
      darkBlue: string
      terminalBackground: string
      error: string
      notifications: {
        error: string
        info: string
        success: string
      }
    }
  }
}
