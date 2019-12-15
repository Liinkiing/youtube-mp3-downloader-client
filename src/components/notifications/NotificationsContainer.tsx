import * as React from 'react'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Notification, { Notification as INotification } from './Notification'
import { Emitter, uuid } from '~/utils'
import { UIEvents } from '~/enums'

const notificationsRoot = process.browser ? document.getElementById('notifications') : null

const NotificationsContainer: React.FC = () => {
  if (!notificationsRoot) {
    return null
  }
  const [notifications, setNotifications] = useState<Array<React.ReactElement<INotification>>>([])
  useEffect(() => {
    Emitter.on(UIEvents.NotificationShow, (notification: INotification) => {
      setNotifications(n => [...n, <Notification key={notification.id} {...notification} />])
      notificationsRoot.classList.add('visible')
    })
    Emitter.on(UIEvents.NotificationHide, (notification: INotification) => {
      setNotifications(n => {
        const filtered = n.filter(notif => notif.props.id !== notification.id)
        if (filtered.length === 0) {
          notificationsRoot.classList.remove('visible')
        }
        return filtered
      })
    })

    return () => {
      notificationsRoot.classList.remove('visible')
      Emitter.removeAllListeners(UIEvents.NotificationShow)
    }
  }, [])

  return ReactDOM.createPortal(notifications, notificationsRoot)
}

export const notify = (notification: Omit<INotification, 'id' | 'createdAt'>): void => {
  Emitter.emit(UIEvents.NotificationShow, { ...notification, id: uuid(), createdAt: Date.now() })
}

export default NotificationsContainer
