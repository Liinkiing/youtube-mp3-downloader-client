import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'

const AudioRequestInner = styled.div``

const AudioRequest: NextPage = () => (
  <AudioRequestInner>
    <AppHead title="AudioRequest" />
    <p>Hello from audio request</p>
  </AudioRequestInner>
)

export default AudioRequest
