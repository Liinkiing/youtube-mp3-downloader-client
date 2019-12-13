import { Variants } from 'framer-motion'

const ease = [0.48, 0.15, 0.25, 0.96]

export const DefaultRouterPageVariants: Variants = {
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease } },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease,
    },
  },
}
