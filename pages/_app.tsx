import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import { MercureProvider } from '@liinkiing/use-mercure'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <MercureProvider options={{ hubUrl: process.env.NEXT_STATIC_HUB_URL }}>
        <AppNav />
        <Component {...pageProps} />
      </MercureProvider>
    )
  }
}

export default MyApp
