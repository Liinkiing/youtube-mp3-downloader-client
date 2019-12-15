import React from 'react'
import Body from '~/components/ui/song-card/body'
import Cover from '~/components/ui/song-card/cover'
import styled from 'styled-components'
import { MAIN_BORDER_RADIUS, MAIN_BOX_SHADOW } from '~/styles/modules/variables'

type SongCard = React.FC & { Body: typeof Body; Cover: typeof Cover }

const SongCardInner = styled.div`
  padding: 30px;
  ${MAIN_BOX_SHADOW};
  background: white;
  ${MAIN_BORDER_RADIUS};
  display: flex;
  max-width: 100%;
`

const SongCard: SongCard = ({ children }) => (
  <SongCardInner>
    {children}
  </SongCardInner>
)

SongCard.Body = Body
SongCard.Cover = Cover

export default SongCard
