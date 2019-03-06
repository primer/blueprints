import React from 'react'
import {withRouter} from 'next/router'
import {Box, BorderBox, Flex, Relative} from '@primer/components'
import NodeLink from './NodeLink'
import {rootPage} from './utils'

function SideNav(props) {
  return (
    <Relative is="nav">
      <Box id="sidenav" {...props}>
        <Flex flexDirection="column" alignItems="start">
          <Router>
            {props.children}
          </Router>
        </Flex>
      </Box>
    </Relative>
  )
}

/**
 * This is inspired by React Router's <Router> component, in that it looks for
 * children with the `path` prop and only renders the _first_ one that matches
 * the beginning of the current path. Children without a `path` prop are always
 * rendered.
 */
const Router = withRouter(({router, children}) => {
  let matched = false
  return React.Children.toArray(children).map(child => {
    if (child.props.path) {
      if (!matched && router.pathname.indexOf(child.props.path) === 0) {
        return (matched = child)
      }
    } else {
      return child
    }
  })
})

export default SideNav
