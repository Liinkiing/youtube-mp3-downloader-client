import { NextPage } from 'next'
import styled from 'styled-components'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import Terminal from '~/components/Terminal'
import InfiniteProgressBar from '~/components/ui/InfiniteProgressBar'

const ProcessStatusInformations = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 0.5rem;
  }
`

const ProcessTerminal = styled(Terminal)`
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
const Process: NextPage = () => (
  <Page>
    <AppHead title="Processing" />
    <ProcessStatus>
      <ProcessStatusInformations>
        <h1>Your song is loading</h1>
        <h2>Let the magic happen...</h2>
      </ProcessStatusInformations>
      <ProcessProgressBar />
    </ProcessStatus>
    <ProcessTerminal />
  </Page>
)

export default Process
