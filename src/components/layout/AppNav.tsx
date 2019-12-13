import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { lighten } from 'polished'
import AppLogo from '~/components/ui/graphics/AppLogo'
import { LINKS_FOCUS_STATE } from '~/styles/modules/variables'

const AppNavInner = styled.nav`
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 8vw;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    & > li {
      position: relative;
      margin-right: 20px;
      &:last-of-type {
        margin-right: 0;
      }
      &:after {
        transition: all 0.3s;
        opacity: 0;
        transform-origin: left center;
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 4px;
        width: 100%;
        background: ${props => theme(props).colors.secondary};
        transform: scaleX(0);
      }
      &:hover {
        &:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
  a {
    transition: all 0.2s;
    color: ${props => theme(props).colors.secondary};
    font-weight: 900;
    font-size: 2rem;
    text-decoration: none;
    margin: 0;
    &:hover {
      color: ${props => lighten(0.1, theme(props).colors.secondary)};
    }
    ${LINKS_FOCUS_STATE};
  }
`

const AppNav: NextPage = () => (
  <AppNavInner>
    <Link href="/">
      <a>
        <AppLogo />
      </a>
    </Link>
    <ul>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </AppNavInner>
)

export default AppNav
