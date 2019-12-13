import React from 'react'
import styled from 'styled-components'
import { LINKS_FOCUS_STATE } from '~/styles/modules/variables'

interface Props extends React.HTMLAttributes<SVGElement> {
  readonly color?: string
}

const AppLogoInner = styled.svg`
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  ${LINKS_FOCUS_STATE};
`

const AppLogo: React.FC<Props> = ({ color, ...rest }) => {
  return (
    <AppLogoInner
      {...rest}
      stroke="currentColor"
      width="104"
      height="48"
      viewBox="0 0 104 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.09469 6.99768C1.42802 13.1614 4.09467 21.9906 16.0947 21.9906" stroke="#3D61EA" strokeWidth="4" />
      <path d="M16 2C16 2 17 36.9835 16 41.9812C15 46.9788 7 46.9788 5.5 38.4828" stroke="#3D61EA" strokeWidth="4" />
      <path
        d="M69.9999 21.9906C81.8263 21.9906 84.8779 17.3522 83.7973 12.7138C82.7167 8.07543 69.9999 2.32809 69.9999 9.4965"
        stroke="#3D61EA"
        strokeWidth="4"
      />
      <path
        d="M84.4999 5.28164C84.4999 5.28164 92.9999 -0.727107 95.9999 5.28164C98.9999 11.2904 92 19.492 90.5 21.4591C88.3833 24.2349 94.8816 14.9941 99.5 24.9894C103.195 32.9856 102.5 46.8808 93.4999 45.9563C84.4999 45.0319 86.5 33.9388 86.5 33.9388"
        stroke="#3D61EA"
        strokeWidth="4"
      />
      <path d="M70 8.9967C70 8.9967 70 34.0893 70 37.983" stroke="#3D61EA" strokeWidth="4" />
      <path d="M23 27.9878H26M29 27.9878H26M26 27.9878V34.4847" stroke="#3D61EA" strokeWidth="2" />
      <path
        d="M35 30.4865C35 32.016 33.9659 32.9849 33 32.9849C32.0341 32.9849 31 32.016 31 30.4865C31 28.957 32.0341 27.9882 33 27.9882C33.9659 27.9882 35 28.957 35 30.4865Z"
        stroke="#3D61EA"
        strokeWidth="2"
      />
      <path
        d="M47 4.49878V15.9934M47 38.4828V15.9934M47 15.9934C47 11.9952 50 3.99901 53 9.49642C56 14.9938 55 38.4828 55 38.4828"
        stroke="#3D61EA"
        strokeWidth="4"
      />
      <path
        d="M54.5 15.4936C54.5 11.4884 57.8291 3.93819 60.254 9.4453C62.679 14.9524 61.8707 38.4828 61.8707 38.4828"
        stroke="#3D61EA"
        strokeWidth="4"
      />
      <path d="M21 23.2531H42M42 23.2531L36.6 17.9924M42 23.2531L36.6 27.9877" stroke="#3D61EA" strokeWidth="3" />
    </AppLogoInner>
  )
}

export default AppLogo
