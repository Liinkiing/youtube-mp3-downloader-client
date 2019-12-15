import React from 'react'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { ripple } from '~/styles/houdini'
import { motion } from 'framer-motion'
import { StyledClassName } from '~/@types'

type Variant = 'primary' | 'secondary'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  readonly variant?: Variant
  readonly disabled?: boolean
  readonly onAnimationStart?: () => void
  readonly type?: 'button' | 'submit' | 'reset'
}

const IconInner = styled.span`
  display: flex;
`

const RippleButtonInner = styled(motion.button)<{ variant: Variant }>`
  padding: 15px 40px;
  border-radius: 50px;
  outline: none;
  border: none;
  background: ${props => theme(props).colors[props.variant]};
  @supports (background: paint(ripple)) {
    background: ${props => theme(props).colors[props.variant]} paint(ripple);
  }
  color: whitesmoke;
  font-family: inherit;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  box-shadow: 2px 4px 4px rgba(101, 106, 104, 0.07);
  ${ripple};
  &:hover {
    cursor: pointer;
  }
  & > * {
    pointer-events: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  & span.button__inner {
    font-size: 1rem;
    font-weight: 700;
  }
  & ${IconInner} {
    margin-left: 0;
    margin-right: 1.5rem;
  }
  & span + ${IconInner} {
    margin-left: 1.5rem;
    margin-right: 0;
  }
`

const Icon: React.FC<{ as: React.ComponentType }> = ({ as }) => <IconInner>{React.createElement(as)}</IconInner>

const RippleButton: React.FC<Props & StyledClassName> & { Icon: typeof Icon } = ({
  children,
  variant,
  disabled,
  onClick,
  className,
}) => {
  return (
    <RippleButtonInner
      disabled={disabled}
      transition={{ duration: 0.01 }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      variant={variant}
      onClick={e => {
        e.currentTarget.classList.remove('rippling')
        e.currentTarget.getBoundingClientRect() // Force a repaint of the browser to play the CSS transition
        e.currentTarget.classList.add('rippling')
        e.currentTarget.style.setProperty('--circle-x', String((e.nativeEvent as any).offsetX))
        e.currentTarget.style.setProperty('--circle-y', String((e.nativeEvent as any).offsetY))
        onClick && onClick(e)
      }}
      className={className}
    >
      {React.Children.map(children, c => (typeof c === 'string' ? <span className="button__inner">{c}</span> : c))}
    </RippleButtonInner>
  )
}

RippleButton.defaultProps = {
  variant: 'primary',
}

RippleButton.Icon = Icon

export default RippleButton
