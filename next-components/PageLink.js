import React from 'react'
import Link from './Link'
import Pages from '@primer/next-pages'

const {pageMap = new Map()} = Pages

export default function PageLink(props) {
  const {href, children: content} = props
  if (content) {
    return <Link {...props} />
  }
  const page = pageMap.get(href)
  if (!page) {
    // eslint-disable-next-line no-console
    console.warn(`no page for "${href}"`, pageMap.keys())
  }
  const children = (page ? page.meta.title : null) || href
  return <Link {...props}>{children}</Link>
}
