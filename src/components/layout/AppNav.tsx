import React, { useState } from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styled, { css } from 'styled-components'
import AppLogo from '~/components/ui/graphics/AppLogo'
import AppLink from '~/components/AppLink'
import { breakpoint } from 'styled-components-breakpoint'
import { useEvent } from '~/hooks/useEvent'
import { UIEvents } from '~/enums'

const AppNavInner = styled.nav<{ visible: boolean }>`
  transition: opacity 0.3s ease-in;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin: 0 8vw;
  ${breakpoint('tablet')`
    height: 200px;
  `};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    & > li {
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  & .app__logo:hover:after {
    content: none;
  }
  ${props =>
    !props.visible &&
    css`
      opacity: 0;
      visibility: hidden;
    `};
  ${breakpoint('tablet')`
  ${props =>
    !(props as any).visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
  `};
`

const NavLink = styled(AppLink)`
  font-weight: 900;
  font-size: 2rem;
`

const AppNav: NextPage = () => {
  const [visible, setVisible] = useState(true)
  useEvent(UIEvents.NavigationShow, () => {
    setVisible(true)
  })
  useEvent(UIEvents.NavigationHide, () => {
    setVisible(false)
  })
  return (
    <AppNavInner visible={visible}>
      <Link href="/">
        <NavLink tabIndex={1} className="app__logo">
          <AppLogo />
        </NavLink>
      </Link>
      <ul>
        <li>
          <Link href="/about">
            <NavLink tabIndex={1}>About</NavLink>
          </Link>
        </li>
      </ul>
    </AppNavInner>
  )
}

export default AppNav
