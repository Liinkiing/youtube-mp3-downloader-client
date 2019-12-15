import { NextPage } from 'next'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import AppLink from '~/components/AppLink'
import { FiGithub } from 'react-icons/fi'

const About: NextPage = () => (
  <Page>
    <AppHead title="About" />
    <h1>YouTube to MP3</h1>
    <h2>Your assistant for quality mp3</h2>
    <p>
      <AppLink href="https://github.com/Liinking"><FiGithub/> @Liinkiing</AppLink>
    </p>
    <p>
      <AppLink href="https://github.com/itsleaht"><FiGithub/> @itsleaht</AppLink>

    </p>
  </Page>
)

export default About
