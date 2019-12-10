import React, { useState } from 'react'
import styled from 'styled-components'
import { useMercure } from '@liinkiing/use-mercure'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'

interface Props {
  readonly request: AudioRequest
}

const OutputLogInner = styled.code``

const OutputLog: React.FC<Props> = ({ request }) => {
  const router = useRouter()
  const [lines, setLines] = useState<string[]>([])
  useMercure<string>(
    `/audio/request/${request.id}/output`,
    data => {
      setLines([...lines, data])
    },
    [lines],
  )
  useMercure<{ request: AudioRequest }>(
    `/audio/request/${request.id}/finish`,
    ({ request }) => {
      router.replace(`/audio/request/${request.id}`)
    },
    [lines],
  )
  useMercure<{ reason: string }>(
    `/audio/request/${request.id}/failed`,
    ({ reason }) => {
      router.replace(`/`)
    },
    [lines],
  )
  return (
    <div>
      <h3>Output</h3>
      <OutputLogInner>
        <ul>
          {lines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </OutputLogInner>
    </div>
  )
}

export default OutputLog
