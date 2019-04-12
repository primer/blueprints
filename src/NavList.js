import React from 'react'
import Pages from '@primer/next-pages'
import {nodeSort} from './utils'
import {BorderBox} from '@primer/components'
import NavLink from './NavLink'
import SectionLink from './SectionLink'

const {pageMap = new Map()} = Pages

/**
 * A <NavList> renders a <Section.Link> for the given `path` and looks up the
 * path in the page tree. If a node is found, it renders a <NavLink> for each
 * of the node's children.
 */
export default function NavList({path, currentPath}) {
  const node = pageMap.get(path)
  const children = node ? node.children.sort(nodeSort) : []
  console.log('!!!')
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      <SectionLink next currentPath={currentPath} color="gray.9" href={path} mb={3} />
      {children.map(child => (
        <NavLink next mt={2} currentPath={currentPath} href={child.path} key={child.path} />
      ))}
    </BorderBox>
  )
}
