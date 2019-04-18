import React from 'react'
import Pages from '@primer/next-pages'
import {nodeSort} from './utils'
import {BorderBox} from '@primer/components'
import NavLink from './NavLink'
import SectionLink from './SectionLink'
import PageLink from './PageLink'

const {pageMap = new Map()} = Pages

export default function NavList({path, currentPath}) {
  const node = pageMap.get(path)
  const children = node ? node.children.sort(nodeSort) : []
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      <SectionLink link={PageLink} currentPath={currentPath} color="gray.9" href={path} mb={3} />
      {children.map(child => (
        <NavLink link={PageLink} mt={2} currentPath={currentPath} href={child.path} key={child.path} />
      ))}
    </BorderBox>
  )
}
