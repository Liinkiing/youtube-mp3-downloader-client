import { NextPage } from 'next'
import { FiArrowLeft, FiUser } from 'react-icons/fi'
import AppHead from '~/components/AppHead'
import { AudioRequest } from '~/@types/api'
import { useRouter } from 'next/router'
import Page from '~/components/layout/Page'
import styled from 'styled-components'
import RippleButton from '~/components/ui/RippleButton'
import SongCard from '~/components/ui/song-card'
import DownloadIcon from '~/components/ui/graphics/DownloadIcon'
import { breakpoint } from 'styled-components-breakpoint'
import ApiClient from '~/services/api-client'
import Link from 'next/link'

interface Props {
  readonly hasError: boolean
  readonly request?: AudioRequest
}

const AudioPage = styled(Page)`
  justify-content: flex-start;
  padding-top: 120px;
  ${breakpoint('tablet')`
    padding-top: 280px;
  `};
`

const InformationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const DownloadLink = styled(RippleButton)`
  position: relative;
  margin-top: 30px;
  ${breakpoint('tablet')`
    margin-left: 30px;
  `}
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
      <AppHead
        title={request.audio.title}
        description={`Download the song "${request.audio.title}"${
          request.audio.artist ? ' by ' + request.audio.artist : ''
        }`}
        socialImage={request.audio.thumbnailUrl ?? undefined}
        url={`/audio/request/${request.id}`}
      />
      <h1>Your song is ready!</h1>
      <InformationsContainer>
        <SongCard>
          <SongCard.Cover url={request.audio.thumbnailUrl} />
          <SongCard.Body>
            <h2>{request.audio.title}</h2>
            {request.audio.artist && (
              <h3>
                <FiUser /> {request.audio.artist}
              </h3>
            )}
          </SongCard.Body>
        </SongCard>
        <DownloadLink variant="primary" onClick={() => window.open(request.audio._href.download, '_self')}>
          Download
          <RippleButton.Icon as={DownloadIcon} />
        </DownloadLink>
      </InformationsContainer>
      <ActionsContainer>
        <Link href="/">
          <a>
            <RippleButton variant="secondary">
              <RippleButton.Icon as={FiArrowLeft} />
              Back to home
            </RippleButton>
          </a>
        </Link>
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
