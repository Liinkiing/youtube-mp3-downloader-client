import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { lighten } from 'polished'
import { LINKS_FOCUS_STATE } from '~/styles/modules/variables'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  readonly href?: string
}

const AppLinkInner = styled.a`
  position: relative;
  transition: all 0.2s;
  color: ${props => theme(props).colors.secondary};
  text-decoration: none;
  margin: 0;
  &:hover {
    cursor: pointer;
    color: ${props => lighten(0.1, theme(props).colors.secondary)};
  }
  &:after {
    transition: all 0.3s;
    opacity: 0;
    transform-origin: left center;
    content: '';
    position: absolute;
    left: 0;
    bottom: -10%;
    height: 10%;
    width: 100%;
    background: ${props => lighten(0.1, theme(props).colors.secondary)};
    transform: scaleX(0);
  }
  &:not(:focus):hover {
    &:after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
  ${LINKS_FOCUS_STATE};
`

const AppLink = React.forwardRef<HTMLAnchorElement, Props>(({ href, className, onClick, children, ...rest }, ref) => {
  return (
    <AppLinkInner
      {...rest}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.currentTarget.click()
        }
      }}
      href={href}
      className={className}
      ref={ref}
      onMouseDown={e => {
        e.preventDefault()
      }}
      onClick={e => {
        e.currentTarget.blur()
        onClick && onClick(e)
      }}
    >
      {children}
    </AppLinkInner>
  )
})

AppLink.displayName = 'AppLink'

export default AppLink
