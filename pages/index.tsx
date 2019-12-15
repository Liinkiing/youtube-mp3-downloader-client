import { NextPage } from 'next'
import SearchForm from '~/components/SearchForm'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import styled from 'styled-components'
import CharacterRolling from '~/components/ui/graphics/CharacterRolling'
import { useRouter } from 'next/router'
import { breakpoint } from 'styled-components-breakpoint'

const BackCharacterRolling = styled(CharacterRolling)`
  z-index: -1;
  position: fixed;
  left: 50%;
  bottom: 10%;
  display: none;
  ${breakpoint('tablet')`
    display: block;
  `};
  @media screen and (orientation: landscape) and (max-width: 812px) {
    display: none;
  }
`

const Title = styled.h1`
  max-width: 600px;
  margin-bottom: 0;
`

const Index: NextPage = () => {
  const router = useRouter()
  return (
    <Page>
      <AppHead title="YouTube MP3 Downloader" url="/" />
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
