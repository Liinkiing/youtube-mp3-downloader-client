import React, { useState } from 'react'
import styled from 'styled-components'
import { AudioRequest } from '~/@types/api'
import useMercure from '~/hooks/useMercure'

interface Props {
  readonly request: AudioRequest
}

const OutputLogInner = styled.code``

const OutputLog: React.FC<Props> = ({ request }) => {
  const [lines, setLines] = useState<string[]>([])
  useMercure<string>(
    `/audio/request/${request.id}/output`,
    data => {
      setLines([...lines, data])
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
