import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import InfiniteProgressBar from '~/components/ui/InfiniteProgressBar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AudioRequest } from '~/@types/api'
import ApiClient from '~/services/api-client'
import OutputLog from '~/components/OutputLog'

interface Props {
  readonly youtubeUrl?: string
}

const ProcessStatusInformations = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 0.5rem;
  }
`

const TerminalContainer = styled.div`
  margin-top: 40px;
`

const ProcessProgressBar = styled(InfiniteProgressBar)``

const ProcessStatus = styled.div`
  display: flex;
  align-items: center;
  ${ProcessStatusInformations} {
    flex: 1;
  }
  ${ProcessProgressBar} {
    flex: 1;
  }
`
const Process: NextPage<Props> = ({ youtubeUrl }) => {
  const router = useRouter()
  const [request, setRequest] = useState<AudioRequest | null>(null)
  useEffect(() => {
    const doFetch = async () => {
      const match = await ApiClient.findAudioRequest(youtubeUrl)
      if (match) {
        router.push(`/audio/request/[id]`, `/audio/request/${match.id}`)
      } else {
        setRequest(await ApiClient.postAudioRequest({ youtubeUrl }))
      }
    }
    doFetch()
  }, [router, youtubeUrl])
  return (
    <Page>
      <AppHead title="Processing" />
      <ProcessStatus>
        <ProcessStatusInformations>
          <h1>Your song is loading</h1>
          <h2>Let the magic happen...</h2>
        </ProcessStatusInformations>
        <ProcessProgressBar />
      </ProcessStatus>
      <TerminalContainer>{request && <OutputLog request={request} />}</TerminalContainer>
    </Page>
  )
}

Process.getInitialProps = ({ query }) => ({ youtubeUrl: query.v as string })

export default Process
