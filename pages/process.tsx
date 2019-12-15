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
import { AnimatePresence, motion } from 'framer-motion'
import { breakpoint } from 'styled-components-breakpoint'
import { notify } from '~/components/notifications/NotificationsContainer'
import { Emitter } from '~/utils'
import { UIEvents } from '~/enums'

interface Props {
  readonly youtubeUrl?: string
}

const ProcessStatusInformations = styled.div`
  display: flex;
  flex-direction: column;
`

const TerminalContainer = styled(motion.div)`
  margin-top: 20px;
  width: 100vw;
  height: 100%;
  position: relative;
  left: -5vw;
  ${breakpoint('tablet')`
    margin-top: 40px;
    height: 441px;
    width: auto;
    position: static;
  `};
`

const ProcessProgressBar = styled(InfiniteProgressBar)``

const ProcessStatus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 16vh;
  ${breakpoint('tablet')`
    flex-direction: row;
    margin-top: 0;
    text-align: left;
  `};
  ${ProcessStatusInformations} {
    flex: 1;
  }
  ${ProcessProgressBar} {
    margin-top: 2rem;
    ${breakpoint('tablet')`
      margin-top: 0;
    `};
    flex: 1;
  }
`
const Process: NextPage<Props> = ({ youtubeUrl }) => {
  const router = useRouter()
  const [request, setRequest] = useState<AudioRequest | null>(null)
  useEffect(() => {
    Emitter.emit(UIEvents.NavigationHide)

    return () => {
      Emitter.emit(UIEvents.NavigationShow)
    }
  }, [])
  useEffect(() => {
    if (!youtubeUrl) {
      notify({
        type: 'info',
        content: 'You have to specify a YouTube url',
      })
      router.replace('/')
    }
    const doFetch = async () => {
      try {
        const match = await ApiClient.findAudioRequest(youtubeUrl)
        if (match) {
          router.replace(`/audio/request/[id]`, `/audio/request/${match.id}`)
        } else {
          setRequest(await ApiClient.postAudioRequest({ youtubeUrl }))
        }
      } catch (e) {
        notify({
          type: 'error',
          content: 'An error occurred, please retry',
        })
        router.replace('/')
      }
    }
    doFetch()
  }, [youtubeUrl])
  return (
    <Page>
      {!request && <AppHead title="Loading..." url="/process" />}
      {request && <AppHead title={`Processing ${request.youtubeUrl}...`} />}
      <ProcessStatus>
        <ProcessStatusInformations>
          <h1>Your song is loading</h1>
          <h2>Let the magic happen...</h2>
        </ProcessStatusInformations>
        <ProcessProgressBar />
      </ProcessStatus>
      <AnimatePresence>
        {request && (
          <TerminalContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <OutputLog request={request} />
          </TerminalContainer>
        )}
      </AnimatePresence>
    </Page>
  )
}

Process.getInitialProps = ({ query }) => ({ youtubeUrl: query.v as string })

export default Process
