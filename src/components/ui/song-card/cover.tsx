import React from 'react'
import styled from 'styled-components'
import { MAIN_BORDER_RADIUS, MAIN_BOX_SHADOW } from '~/styles/modules/variables'

interface Props {
  readonly url: string | null
  readonly alt?: string
}

const CoverInner = styled.img`
  width: 190px;
  height: 150px;
  object-fit: cover;
  ${MAIN_BORDER_RADIUS};
  ${MAIN_BOX_SHADOW};
  margin-right: 2rem;
`

const Cover: React.FC<Props> = ({ children, url, alt }) => {
  return (
    <CoverInner src={url ?? '/images/placeholder.jpg'} alt={alt ?? "Song's thumbnail"}>
      {children}
    </CoverInner>
  )
}

export default Cover
