import { DependencyList, useContext, useEffect } from 'react'
import { MercureContext } from '~/providers/mercure'

const useMercure = <D>(topic: string, onData: (data: D) => void, deps: DependencyList = []) => {
  const hubUrl = useContext(MercureContext)
  const eventSource = new EventSource(`${hubUrl}?topic=${encodeURIComponent(topic)}`)
  useEffect(() => {
    eventSource.onmessage = event => {
      try {
        onData(JSON.parse(event.data) as D)
      } catch (error) {
        onData(event.data as D)
      }
    }

    return () => {
      eventSource.close()
    }
  }, [...deps])
}

export default useMercure
