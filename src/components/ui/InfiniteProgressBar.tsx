import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { StyledClassName } from '~/@types'
import { MAIN_BOX_SHADOW } from '~/styles/modules/variables'
import { infiniteProgressbar } from '~/styles/modules/keyframes'

const ProgressBarOuter = styled.div`
  background: ${props => theme(props).colors.primary};
  border: 15px solid white;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  ${MAIN_BOX_SHADOW()};
`
const ProgressBarInner = styled.div`
  animation: ${infiniteProgressbar} 10s infinite linear;
  height: 100%;
  width: 200%;
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.55) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.55) 50%,
    rgba(255, 255, 255, 0.55) 75%,
    transparent 75%,
    transparent
  );
  background-size: 2rem 2rem;
`

const InfiniteProgressBar: React.FC<StyledClassName> = ({ className }) => {
  return (
    <ProgressBarOuter className={className}>
      <ProgressBarInner />
    </ProgressBarOuter>
  )
}

export default InfiniteProgressBar
