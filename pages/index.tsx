import { NextPage } from 'next'
import SearchForm from '~/components/SearchForm'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import Blob from '~/components/ui/graphics/Blob'
import styled from 'styled-components'
import CharacterRolling from '~/components/ui/graphics/CharacterRolling'
import { useRouter } from 'next/router'

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

const Title = styled.h1`
  max-width: 600px;
  margin-bottom: 0;
`

const Index: NextPage = () => {
  const router = useRouter()
  return (
    <Page>
      <AppHead title="Homepage" />
      <FirstBlob pattern="first" />
      <SecondBlob pattern="second" />
      <BackCharacterRolling />
      <Title>Convert your favorite YouTube videos to mp3</Title>
      <SearchForm
        onVideoSubmitted={({ url }) => {
          router.push({
            pathname: '/process',
            query: {
              v: url,
            },
          })
        }}
      />
    </Page>
  )
}

export default Index
