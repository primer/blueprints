import React from 'react'
import {rootPage, nodeSort} from './utils'
import NavLink from './NavLink'
import Section from './Section'

/**
 * A <NavList> renders a <Section.Link> for the given `path` and looks up the
 * path in the page tree. If a node is found, it renders a <NavLink> for each
 * of the node's children.
 */
export default function NavList({path}) {
  const node = rootPage.first(node => node.path === path)
  const children = node ? node.children.sort(nodeSort) : []
  return (
    <>
      <Section.Link color="gray.9" href={path} mb={3} />
      {children.map(child => (
        <NavLink mt={2} href={child.path} key={child.path} />
      ))}
    </>
  )
}
