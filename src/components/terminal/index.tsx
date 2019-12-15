import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { MAIN_BORDER_RADIUS, MAIN_BOX_SHADOW } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'
import { StyledClassName } from '~/@types'
import Row from '~/components/terminal/row'
import { useHasScrolled } from '~/hooks/useHasScrolled'

const TerminalWindowControls = styled.div`
  transition: box-shadow 0.3s;
  padding: 15px 20px;
`

const TerminalInner = styled.div<{ hasScrolled: boolean }>`
  width: 100%;
  height: 441px;
  ${MAIN_BORDER_RADIUS};
  ${MAIN_BOX_SHADOW};
  box-shadow: 0 7px 20px rgba(126,126,126,0.6);
  background: ${props => theme(props).colors.terminalBackground};
  display: flex;
  flex-direction: column;
  ${props =>
    props.hasScrolled &&
    css`
      ${TerminalWindowControls} {
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
      }
    `}
`

const TerminalContent = styled.div`
  font-variant-ligatures: contextual;
  font-feature-settings: 'calt';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: 'Cascadia Code', 'Fira Code', 'Hack', monospace !important;
  color: whitesmoke;
  height: 87%;
  padding: 0 20px 20px 20px;
  overflow-y: hidden;
`

const Terminal: React.FC<StyledClassName> & { Row: typeof Row } = ({ className, children }) => {
  const content = useRef<HTMLDivElement>()
  const hasScrolled = useHasScrolled(content)
  useEffect(() => {
    if (content.current) {
      content.current.scrollTop = content.current.scrollHeight
    }
  }, [children])
  return (
    <TerminalInner hasScrolled={hasScrolled} className={className}>
      <TerminalWindowControls>
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
          <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
            <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
            <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
          </g>
        </svg>
      </TerminalWindowControls>
      <TerminalContent ref={content}>{children}</TerminalContent>
    </TerminalInner>
  )
}

Terminal.Row = Row

export default Terminal
