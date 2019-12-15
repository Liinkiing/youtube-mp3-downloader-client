import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styled from 'styled-components'
import AppLogo from '~/components/ui/graphics/AppLogo'
import AppLink from '~/components/AppLink'

export const NAVBAR_HEIGHT = 200

const AppNavInner = styled.nav`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
  align-items: center;
  justify-content: space-between;
  margin: 0 8vw;
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
`

const AppNav: NextPage = () => (
  <AppNavInner>
    <Link href="/">
      <AppLink tabIndex={1} className="app__logo">
        <AppLogo />
      </AppLink>
    </Link>
    <ul>
      <li>
        <Link href="/about">
          <AppLink tabIndex={1}>About</AppLink>
        </Link>
      </li>
    </ul>
  </AppNavInner>
)

export default AppNav
