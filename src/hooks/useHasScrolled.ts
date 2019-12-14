import React, { useEffect, useState } from 'react'

export const useHasScrolled = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
  const [y, setY] = useState(0)
  useEffect(() => {
    const capturedRef = ref
    if (capturedRef.current) {
      const handler = (e: MouseEvent) => {
        e.preventDefault()
        setY(ref.current.scrollTop)
      }
      capturedRef.current.addEventListener('scroll', handler)

      return () => {
        if (capturedRef.current) {
          setY(0)
          capturedRef.current.removeEventListener('scroll', handler)
        }
      }
    }
  }, [ref])

  return y > 0
}
