import React from 'react'
import styled from 'styled-components'
import { MAIN_BORDER_RADIUS, MAIN_BOX_SHADOW } from '~/styles/modules/variables'
import { theme } from '~/styles/themes'
import { StyledClassName } from '~/@types'

const TerminalInner = styled.div`
  width: 100%;
  height: 441px;
  ${MAIN_BORDER_RADIUS};
  ${MAIN_BOX_SHADOW({ color: 'rgba(126,126,126,0.6)', shadow: '0 7px 20px' })};
  background: ${props => theme(props).colors.terminalBackground};
`

const Terminal: React.FC<StyledClassName> = ({ className }) => {
  return <TerminalInner className={className}></TerminalInner>
}

export default Terminal
