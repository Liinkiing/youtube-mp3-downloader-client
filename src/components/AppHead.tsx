import React from 'react'
import NextHead from 'next/head'

const BASE_URL = process.env.NEXT_STATIC_BASE_URL || ''

const defaultDescription = 'A beautiful online converter to get YouTube videos in MP3'
const defaultOGImage = BASE_URL + '/images/og.jpg'

interface Props {
  title?: string
  description?: string
  url?: string
  socialImage?: string
}

const AppHead: React.FC<Props> = ({ title, description, url, socialImage }) => (
  <NextHead>
    <meta key="charset" charSet="UTF-8" />
    <title>{title}</title>
    <meta key="theme-color" name="theme-color" content="#3E64E1" />
    <link rel="manifest" href="/manifest.json" />
    <meta key="description" name="description" content={description} />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    <link key="icon" rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link key="apple-touch-icon" rel="apple-touch-icon" href="/touch-icon.png" />
    <link key="favicon" rel="icon" href="/favicon.png" />
    <meta key="og-site_name" property="og:site_name" content="YouTube MP3 Downloader" />
    <meta key="og-type" property="og:type" content="website" />
    <meta key="og-url" property="og:url" content={BASE_URL + url} />
    <meta key="og-title" property="og:title" content={title} />
    <meta key="og-description" property="og:description" content={description} />
    <meta key="twitter-site" name="twitter:site" content={BASE_URL + url} />
    <meta key="twitter-site" name="twitter:url" content={BASE_URL + url} />
    <meta key="twitter-card" name="twitter:card" content="summary_large_image" />
    <meta key="twitter-image" name="twitter:image" content={socialImage} />
    <meta key="og-image" property="og:image" content={socialImage} />
    <meta key="og-image-width" property="og:image:width" content="1200" />
    <meta key="og-image-height" property="og:image:height" content="630" />
  </NextHead>
)

AppHead.defaultProps = {
  title: process.env.NEXT_STATIC_APP_NAME || '',
  description: defaultDescription,
  socialImage: defaultOGImage,
}

export default AppHead
