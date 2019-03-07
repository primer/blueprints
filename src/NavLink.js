import React from 'react'
import {withRouter} from 'next/router'
import {Box} from '@primer/components'
import NodeLink from './NodeLink'

const NavLink = withRouter(({href, router, ...rest}) => {
  return (
    <Box {...rest}>
      <NodeLink href={href} color={router.pathname === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
})

export default NavLink
