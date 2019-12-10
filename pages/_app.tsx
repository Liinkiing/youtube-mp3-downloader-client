import React from 'react'
import App from 'next/app'
import AppNav from '~/components/layout/AppNav'
import MercureProvider from '~/providers/mercure'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <MercureProvider hubUrl={process.env.NEXT_STATIC_HUB_URL}>
        <AppNav />
        <Component {...pageProps} />
      </MercureProvider>
    )
  }
}

export default MyApp
