import { NextPage } from 'next'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import AppHead from '~/components/AppHead'
import ApiClient from '~/services/api-client'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'
import Page from '~/components/layout/Page'
import styled from 'styled-components'
import { NAVBAR_HEIGHT } from '~/components/layout/AppNav'
import RippleButton from '~/components/ui/RippleButton'
import SongCard from '~/components/ui/song-card'
import DownloadIcon from '~/components/ui/graphics/DownloadIcon'

interface Props {
  readonly hasError: boolean
  readonly request?: AudioRequest
}

const AudioPage = styled(Page)`
  justify-content: flex-start;
  padding-top: ${NAVBAR_HEIGHT + 80}px;
`

const InformationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const AudioRequestShow: NextPage<Props> = ({ hasError, request }) => {
  const router = useRouter()
  if (hasError) {
    router.replace('/')
  }
  if (!request) {
    return null
  }
  return (
    <AudioPage>
      <AppHead title={request.audio.title} />
      <h1>Your song is ready!</h1>
      <InformationsContainer>
        <SongCard>
          <SongCard.Cover url={request.audio.thumbnailUrl} />
          <SongCard.Body>
            <h2>{request.audio.title}</h2>
            {request.audio.artist && <h3><FiUser/> {request.audio.artist}</h3>}
          </SongCard.Body>
        </SongCard>
        <RippleButton>
          Download
          <RippleButton.Icon as={DownloadIcon} />
        </RippleButton>
      </InformationsContainer>
      <ActionsContainer>
        <RippleButton variant="secondary">
          <RippleButton.Icon as={FiArrowLeft} />
          Back to home
        </RippleButton>
      </ActionsContainer>
    </AudioPage>
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
