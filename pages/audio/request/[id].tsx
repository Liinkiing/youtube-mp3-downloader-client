import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import ApiClient from '~/services/api-client'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'

const AudioRequestInner = styled.div``

interface Props {
  readonly hasError: boolean
  readonly request?: AudioRequest
}

const AudioRequestShow: NextPage<Props> = ({ hasError, request }) => {
  const router = useRouter()
  if (hasError) {
    router.replace('/')
  }
  if (!request) {
    return null
  }
  return (
    <AudioRequestInner>
      <AppHead title={request.audio.title} />
      <h1>{request.audio.title}</h1>
      <a href={request.audio._href.download}>Download song</a>
    </AudioRequestInner>
  )
}

AudioRequestShow.getInitialProps = async ({ query, res }) => {
  try {
    const request = await ApiClient.audioRequest(query.id as string)
    if (!request.audio) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
    }
    return {
      hasError: false,
      request,
    }
  } catch (e) {
    console.error(e)
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

export default AudioRequestShow
