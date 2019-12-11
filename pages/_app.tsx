import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import { MercureProvider } from '@liinkiing/use-mercure'
import { AnimatePresence } from 'framer-motion'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <MercureProvider options={{ hubUrl: process.env.NEXT_STATIC_HUB_URL }}>
        <AppNav />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MercureProvider>
    )
  }
}

export default MyApp
