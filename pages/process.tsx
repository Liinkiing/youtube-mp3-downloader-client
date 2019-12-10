import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import ApiClient from '~/services/api-client'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'
import { YOUTUBE_REGEX } from '~/utils'
import OutputLog from '~/components/OutputLog'

interface Props {
  readonly match?: AudioRequest
  readonly hasError: boolean
  readonly request?: AudioRequest
}

const ProcessInner = styled.div``

const Process: NextPage<Props> = ({ request, hasError, match }) => {
  const router = useRouter()
  if (hasError) {
    router.replace('/')
  }
  if (match) {
    router.replace(`/audio/request/${match.id}`)
  }
  if (!request) {
    return <AppHead title={`Processing`} />
  }
  return (
    <ProcessInner>
      <AppHead title={`Processing ${request.youtubeUrl}...`} />
      <h1>Processing video...</h1>
      <h2>{request.youtubeUrl}</h2>
      <OutputLog request={request} />
    </ProcessInner>
  )
}

Process.getInitialProps = async ({ query, res }) => {
  try {
    const url = query.v as string
    if (!url.match(YOUTUBE_REGEX)) {
      if (res) {
        res.writeHead(302, {
          Location: '/',
        })
        res.end()
      }
    }
    const match = await ApiClient.findAudioRequest(url)
    if (match) {
      if (res) {
        res.writeHead(302, {
          Location: `/audio/request/${match.id}`,
        })
        res.end()
      }
      return {
        match,
        hasError: false,
      }
    }
    const request = await ApiClient.postAudioRequest({
      youtubeUrl: url,
    })
    return {
      request,
      hasError: false,
    }
  } catch (e) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
    }
    return {
      hasError: true,
    }
  }
}

export default Process
