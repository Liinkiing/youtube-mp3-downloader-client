import React from 'react'
import App from 'next/app'
import NProgress from 'next-nprogress/component'
import AppNav from '~/components/layout/AppNav'
import { MercureProvider } from '@liinkiing/use-mercure'
import { AnimatePresence } from 'framer-motion'
import GlobalStyle from '~/styles/global'
import { ThemeProvider } from 'styled-components'
import { light } from '~/styles/themes'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <MercureProvider options={{ hubUrl: process.env.NEXT_STATIC_HUB_URL }}>
        <ThemeProvider theme={light}>
          <GlobalStyle />
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
