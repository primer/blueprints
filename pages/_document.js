import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import {CommonStyles, CommonScripts} from '../next-components/utils'

import favicon from '../static/favicon.png'
import touchIcon from '../static/apple-touch-icon.png'

export default class BlueprintsDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    return {
      ...page,
      renderedStyles: sheet.getStyleElement()
    }
  }

  render() {
    const {files, renderedStyles} = this.props

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf8" />
          <link rel="icon" href={favicon} />
          <link rel="apple-touch-icon" href={touchIcon} />
          <link rel="stylesheet" href="https://unpkg.com/primer-markdown@4.0.0/build/build.css" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta property="og:title" content="Primer Blueprints" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://primer.style/blueprints/" />
          <meta property="og:description" content="Shareable Components from Primer Documentation Sites" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/586552/47590375-121cad80-d93a-11e8-89f2-a1cf108e0548.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@githubprimer" />
          <CommonStyles />
          {renderedStyles}
        </Head>
        <body data-files={JSON.stringify(files)}>
          <Main />
          <NextScript />
          <CommonScripts />
        </body>
      </html>
    )
  }
}
