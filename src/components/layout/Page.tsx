import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DefaultRouterPageVariants } from '~/common/framer'

interface Props {
  readonly as?: string
  readonly noDefaultTransition?: boolean
}

const PageInner = styled(motion.div)`
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
`

const Page: NextPage<Props> = ({ children, as = 'div', noDefaultTransition = false, ...rest }) =>
  React.createElement(
    motion[as],
    {
      exit: 'exit',
      initial: 'exit',
      animate: 'enter',
      className: 'router__wrapper',
    },
    <PageInner {...rest} {...(noDefaultTransition ? {} : { variants: DefaultRouterPageVariants })}>
      {children}
    </PageInner>,
  )

export default Page
