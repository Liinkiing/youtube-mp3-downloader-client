import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'

interface Props extends React.ComponentPropsWithoutRef<'button'> {}

const AppInputInner = styled.input`
  border: none;
  padding: 28px;
  border-radius: ${props => theme(props).borderRadius};
  color: ${props => theme(props).colors.text};
  font: inherit;
  font-size: 1.4rem;
`

const AppInput = React.forwardRef<HTMLInputElement, Props>(({ children, ...rest }, ref) => {
  return (
    <AppInputInner {...rest} ref={ref}>
      {children}
    </AppInputInner>
  )
})

AppInput.displayName = 'AppInput'

export default AppInput
