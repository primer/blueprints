import React from 'react'
import getConfig from 'next/config'
import {join} from 'path'

export function sortCompare(a, b, get) {
  const aa = get(a)
  const bb = get(b)
  return typeof aa === 'string' && typeof bb === 'string' ? aa.localeCompare(bb) : undefined
}

export function nodeSort(a, b) {
  return sortCompare(a, b, node => node.meta.sort_title || node.meta.title)
}

export function addPath(el, path) {
  // if there's no path, just return the element
  if (!path) return el

  // if this is a link it'll have an "href"; otherwise, add "path"
  const prop = el.props.href ? 'href' : 'path'
  const value = el.props[prop]
  const props = {}
  // if there's a value and it's not absolute, prefix it with the path
  if (value && !value.match(/^(\/|https?:)/)) {
    props[prop] = join(path, value)
  } else {
    props[prop] = path
  }
  return React.cloneElement(el, props)
}
