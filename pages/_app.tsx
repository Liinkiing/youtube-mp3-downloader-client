import React from 'react'
import App from 'next/app'
import NProgress from 'next-nprogress/component'
import AppNav from '~/components/layout/AppNav'
import { MercureProvider } from '@liinkiing/use-mercure'
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from '~/styles/global'
import styled, { ThemeProvider } from 'styled-components'
import { light } from '~/styles/themes'
import Blob from '~/components/ui/graphics/Blob'
import { rotation } from '~/styles/modules/keyframes'
import { breakpoint } from 'styled-components-breakpoint'
import NotificationsContainer from '~/components/notifications/NotificationsContainer'

const FirstBlob = styled(Blob)`
  animation: ${rotation} 120s infinite alternate-reverse linear;
  z-index: -1;
  position: fixed;
  left: 50%;
  bottom: 10%;
  transform: translate(0px, 300px);
  ${breakpoint('tablet')`
    transform: unset;
  `};
`
const SecondBlob = styled(Blob)`
  animation: ${rotation} 120s infinite alternate-reverse linear;
  z-index: -1;
  position: fixed;
  left: -170px;
  top: -200px;
  opacity: 0.7;
`

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <MercureProvider options={{ hubUrl: process.env.NEXT_STATIC_HUB_URL }}>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <NotificationsContainer />
          <FirstBlob pattern="first" />
          <SecondBlob pattern="second" />
          <NProgress color={light.colors.primary} spinner={false} />
          <AppNav />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </MercureProvider>
    )
  }
}

export default MyApp
