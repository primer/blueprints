import React from 'react'
import {withRouter} from 'next/router'
import {Box, Link} from '@primer/components'
import PageLink from './PageLink'

const NavLink = ({href, next, currentPath, ...rest}) => {
  const Tag = next ? PageLink : Link

  return (
    <Box {...rest}>
      <Tag href={href} color={currentPath === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
}

export default NavLink
