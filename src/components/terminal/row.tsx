import React from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { ease } from '~/common/framer'

const RowInner = styled(motion.div)`
  margin-top: 0.5rem;
`

const Row: React.FC = ({ children }) => {
  return (
    <AnimatePresence>
      <RowInner
        transition={{ duration: 0.2, ease }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        {children}
      </RowInner>
    </AnimatePresence>
  )
}

export default Row
