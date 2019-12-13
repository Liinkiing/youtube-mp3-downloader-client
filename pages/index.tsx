import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import SearchForm from '~/components/SearchForm'
import AppHead from '~/components/AppHead'
import VideoRequest from '~/components/VideoRequest'
import Page from '~/components/layout/Page'

const Index: NextPage = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  useEffect(() => {
    console.log('videoUrl', videoUrl)
  }, [videoUrl])
  return (
    <Page>
      <AppHead title="Homepage" />
      {!videoUrl && <SearchForm onVideoSubmitted={url => setVideoUrl(url)} />}
      {videoUrl && <VideoRequest url={videoUrl} />}
    </Page>
  )
}

export default Index
