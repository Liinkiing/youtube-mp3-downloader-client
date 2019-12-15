import React, { useState } from 'react'
import { useMercure } from '@liinkiing/use-mercure'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'
import Terminal from '~/components/terminal'

interface Props {
  readonly request: AudioRequest
}

const OutputLog: React.FC<Props> = ({ request }) => {
  const router = useRouter()
  const [rows, setRows] = useState<string[]>([])
  useMercure<string>(
    `/audio/request/${request.id}/output`,
    data => {
      setRows([...rows, data])
    },
    [rows],
  )
  useMercure<{ request: AudioRequest }>(
    `/audio/request/${request.id}/finish`,
    ({ request }) => {
      router.replace('/audio/request/[id]', `/audio/request/${request.id}`)
    },
    [rows],
  )
  useMercure<{ reason: string }>(
    `/audio/request/${request.id}/failed`,
    ({ reason }) => {
      router.replace(`/`)
    },
    [rows],
  )
  return (
    <Terminal>
      {rows.map((log, i) => (
        <Terminal.Row key={i}>{log}</Terminal.Row>
      ))}
    </Terminal>
  )
}

export default OutputLog
