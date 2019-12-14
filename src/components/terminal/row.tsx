import React from 'react'
import styled from 'styled-components'

const RowInner = styled.div``

const Row: React.FC = ({ children }) => {
  return (
    <RowInner>
      {children}
    </RowInner>
  )
}

export default Row
