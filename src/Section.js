import React from  'react'
import {BorderBox, Box} from '@primer/components'
import {withRouter} from 'next/router'
import NavList from './NavList'
import NodeLink from './NodeLink'
import {addPath} from './utils'

/**
 * A <Section> gets a `path` and optional children. If it has children it will
 * render those and prepend each child's `href` prop with the provided `path`.
 * This means that you can do:
 *
 * ```jsx
 * <Section path="/section">
 *   <Link href="foo">Links to /section/foo</Link>
 * </Section>
 * ```
 *
 * If no children are provided, it renders a <NavList> with the provided
 * `path`.
 */
const Section = ({path, children}) => {
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      {children && path ? React.Children.map(children, child => addPath(child, path)) : <NavList path={path} />}
    </BorderBox>
  )
}

/**
 * A <Section.Link> is really just a <NodeLink> that's bold when its `href`
 * matches the current path, wrapped in a <Box> for whitespace.
 */
const SectionLink = withRouter(({href, router, ...rest}) => (
  <Box {...rest}>
    <NodeLink href={href} {...rest} fontSize={2} fontWeight={router.pathname.startsWith(href) ? 'bold' : null} />
  </Box>
))

Section.Link = SectionLink

export default Section
