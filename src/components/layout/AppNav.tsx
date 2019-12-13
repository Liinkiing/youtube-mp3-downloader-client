import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styled from 'styled-components'
import { theme } from '~/styles/themes'
import { lighten } from 'polished'

const AppNavInner = styled.nav`
  position: fixed;
  right: 20px;
  top: 20px;
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
      & a {
        transition: all 0.2s;
        color: ${props => theme(props).colors.primary};
        font-weight: 900;
        font-size: 2rem;
        text-decoration: none;
        margin: 0;
        &:hover {
          color: ${props => lighten(0.1, theme(props).colors.primary)};
        }
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
        background: ${props => theme(props).colors.primary};
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
`

const AppNav: NextPage = () => (
  <AppNavInner>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </AppNavInner>
)

export default AppNav
