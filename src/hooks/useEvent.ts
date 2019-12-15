import { DependencyList, useEffect } from 'react'
import { UIEvents } from '~/enums'
import { Emitter } from '~/utils'

export const useEvent = (event: UIEvents, listener: (...args: any[]) => void, deps: DependencyList = []): void => {
  useEffect(() => {
    Emitter.addListener(event, listener)

    return () => {
      Emitter.removeListener(event, listener)
    }
  }, [event, listener, ...deps])
}
