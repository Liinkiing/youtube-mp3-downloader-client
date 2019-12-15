import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { FOCUS_STATE, MAIN_BOX_SHADOW } from '~/styles/modules/variables'

interface Props extends React.ComponentPropsWithoutRef<'input'> {}

const AppInputInner = styled.input`
  transition: all 0.15s;
  border: 0 solid transparent;
  padding: 24px;
  border-radius: ${props => theme(props).borderRadius};
  color: ${props => theme(props).colors.text};
  font: inherit;
  font-size: 1rem;
  font-weight: 600;
  margin: -10px;
  ${MAIN_BOX_SHADOW};
  &::placeholder {
    opacity: 0.7;
  }
  ${props => FOCUS_STATE(theme(props).colors.darkBlue, { withShadow: true })};
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
