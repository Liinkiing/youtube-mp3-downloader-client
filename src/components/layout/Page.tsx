import React from 'react'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { DefaultRouterPageVariants } from '~/common/framer'

interface Props {
  readonly as?: string
  readonly noDefaultTransition?: boolean
}

const Page: NextPage<Props> = ({ children, as = 'div', noDefaultTransition = false, ...rest }) =>
  React.createElement(
    motion[as],
    {
      exit: 'exit',
      initial: 'exit',
      animate: 'enter',
    },
    <motion.div {...rest} {...(noDefaultTransition ? {} : { variants: DefaultRouterPageVariants })}>{children}</motion.div>,
  )

export default Page
