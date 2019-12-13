import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { ripple } from '~/styles/houdini'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  readonly disabled?: boolean
  readonly type?: 'button' | 'submit' | 'reset'
}

const RippleButtonInner = styled.button`
  transition: all 0.3s;
  padding: 20px;
  border-radius: ${props => theme(props).borderRadius};
  outline: none;
  border: none;
  background: ${props => theme(props).colors.secondary} paint(ripple);
  color: whitesmoke;
  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  ${ripple};
  &:hover {
    cursor: pointer;
  }
  & > * {
    pointer-events: none;
  }
  &:disabled {
    filter: grayscale(100%);
  }
`

const RippleButton: React.FC<Props> = ({ children, onClick, ...rest }) => {
  return (
    <RippleButtonInner
      onClick={e => {
        e.currentTarget.classList.remove('rippling')
        e.currentTarget.getBoundingClientRect() // Force a repaint of the browser to play the CSS transition
        e.currentTarget.classList.add('rippling')
        e.currentTarget.style.setProperty('--circle-x', String((e.nativeEvent as any).offsetX))
        e.currentTarget.style.setProperty('--circle-y', String((e.nativeEvent as any).offsetY))
        onClick && onClick(e)
      }}
      {...rest}
    >
      {children}
    </RippleButtonInner>
  )
}

export default RippleButton
