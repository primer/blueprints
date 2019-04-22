import Router from 'next/router'

/**
 * Export this as your default from a page, and it'll redirect both server-
 * and client-side:
 *
 * ```js
 * import {redirect} from '../src/next-components/utils'
 * export default redirect('/some/path')
 * ```
 */
export function redirect(uri, status = 303) {
  return class {
    static getInitialProps({res}) {
      // the "context" object passed to getInitialProps() will
      // have a "res" (response) object if we're server-side
      if (res) {
        res.writeHead(status, {Location: uri})
        res.end()
      }
    }

    render() {
      Router.replace(uri)
      return null
    }
  }
}

export function redirectTrailingSlash(context, status = 301) {
  const {
    req: {url},
    res
  } = context
  if (url.endsWith('/')) {
    const withoutSlash = url.substr(0, url.length - 1)
    res.writeHead(status, {Location: withoutSlash})
    res.end()
    return true
  }
}
