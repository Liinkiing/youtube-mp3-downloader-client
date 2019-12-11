import { Variants } from 'framer-motion'

const ease = [0.48, 0.15, 0.25, 0.96]

export const DefaultRouterPageVariants: Variants = {
  exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease } },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease,
    },
  },
}
