import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import SearchForm from '~/components/SearchForm'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import Blob from '~/components/ui/graphics/Blob'
import styled from 'styled-components'
import CharacterRolling from '~/components/ui/graphics/CharacterRolling'

const FirstBlob = styled(Blob)`
  z-index: -1;
  position: fixed;
  left: 50%;
  bottom: 10%;
`
const SecondBlob = styled(Blob)`
  z-index: -1;
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translate(-1100px, -650px);
`

const BackCharacterRolling = styled(CharacterRolling)`
  z-index: -1;
  position: fixed;
  left: 50%;
  bottom: 10%;
`

const Index: NextPage = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  useEffect(() => {
    console.log('videoUrl', videoUrl)
  }, [videoUrl])
  return (
    <Page>
      <AppHead title="Homepage" />
      <FirstBlob pattern="first" />
      <SecondBlob pattern="second" />
      <BackCharacterRolling />
      <h1>Convert your favorite youtube videos to mp3</h1>
      <SearchForm onVideoSubmitted={() => {}} />
      {/*{!videoUrl && <SearchForm onVideoSubmitted={url => setVideoUrl(url)} />}*/}
      {/*{videoUrl && <VideoRequest url={videoUrl} />}*/}
    </Page>
  )
}

export default Index
