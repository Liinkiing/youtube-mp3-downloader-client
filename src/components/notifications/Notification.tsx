import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styled, { Keyframes } from 'styled-components'
import { theme } from '~/styles/themes'
import { disappearFromUp, slideInUp } from '~/styles/modules/keyframes'
import { Emitter } from '~/utils'
import { useTimeout } from '~/hooks/useTimeout'
import { UIEvents } from '~/enums'
import { breakpoint } from 'styled-components-breakpoint'

export interface Notification {
  id: string
  type: 'info' | 'success' | 'error'
  duration?: number
  content: string
  createdAt: number
}

type Props = Notification

type StyledProps = Pick<Props, 'type'> & { animation: Keyframes }

const NotificationInner = styled.div<StyledProps>`
  animation: ${props => props.animation} 0.3s forwards ease-in-out;
  background: ${props => theme(props).colors.notifications[props.type]};
  border-radius: ${props => theme(props).borderRadius};
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.21);
  color: whitesmoke;
  line-height: 18px;
  margin: 10px 0;
  padding: 26px;
  pointer-events: all;
  position: relative;
  width: 90%;
  max-width: 100%;
  ${breakpoint('tablet')`
    width: auto;
    min-width: 400px;
  `}
`

const Notification: React.FC<Props> = ({ duration, content, id, ...props }) => {
  const [display, setDisplay] = useState(true)
  const [show, setShow] = useState(true)
  const container = useRef<HTMLDivElement>(null)
  useTimeout(
    () => {
      setShow(false)
    },
    duration,
    [],
  )

  useEffect(() => {
    const ref = container.current
    const endHandler = (evt: AnimationEvent) => {
      if (evt.animationName === disappearFromUp.getName()) {
        setDisplay(false)
      }
    }

    if (ref) {
      ref.addEventListener('animationend', endHandler)
    }

    return () => {
      if (ref) {
        ref.removeEventListener('animationend', endHandler)
      }
    }
  }, [])

  if (!display) {
    Emitter.emit(UIEvents.NotificationHide, id)
    return null
  }

  return (
    <NotificationInner {...props} id={id} ref={container} animation={show ? slideInUp : disappearFromUp}>
      {content}
    </NotificationInner>
  )
}

Notification.defaultProps = {
  duration: 2000,
}

export default Notification
