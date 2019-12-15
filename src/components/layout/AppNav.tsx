import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styled from 'styled-components'
import AppLogo from '~/components/ui/graphics/AppLogo'
import AppLink from '~/components/AppLink'
import { breakpoint } from 'styled-components-breakpoint'

const AppNavInner = styled.nav`
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
`

const NavLink = styled(AppLink)`
  font-weight: 900;
  font-size: 2rem;
`

const AppNav: NextPage = () => (
  <AppNavInner>
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

export default AppNav
