import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'

const BodyInner = styled.div`
  h2 {
    color: ${props => theme(props).colors.secondary};
    line-height: 2rem;
  }
`

const Body: React.FC = ({ children }) => (
  <BodyInner>
    {children}
  </BodyInner>
)

export default Body
