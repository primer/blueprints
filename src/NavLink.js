import React from 'react'
import {Box, Link} from '@primer/components'

const NavLink = ({href, link: Tag, currentPath, ...rest}) => {
  return (
    <Box {...rest}>
      <Tag href={href} color={currentPath === href ? 'black' : undefined} fontSize={1} {...rest} />
    </Box>
  )
}

NavLink.defaultProps = {
  link: Link
}

export default NavLink
