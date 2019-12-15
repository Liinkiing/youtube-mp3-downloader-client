import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ApiClient from '~/services/api-client'
import { useRouter } from 'next/router'
import { AudioRequest } from '~/@types/api'
import OutputLog from '~/components/OutputLog'

interface Props {
  readonly url: string
}

const VideoRequestInner = styled.div``

const VideoRequest: React.FC<Props> = ({ url }) => {
  const router = useRouter()

  const [request, setRequest] = useState<AudioRequest | null>(null)
  useEffect(() => {
    const doFetch = async () => {
      const match = await ApiClient.findAudioRequest(url)
      if (match) {
        router.replace(`/audio/request/[id]`, `/audio/request/${match.id}`)
      } else {
        setRequest(await ApiClient.postAudioRequest({ youtubeUrl: url }))
      }
    }
    doFetch()
  }, [url])
  return (
    <VideoRequestInner>
      {request && <OutputLog request={request}/>}
    </VideoRequestInner>
  )
}

export default VideoRequest
