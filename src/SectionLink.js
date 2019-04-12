import React from 'react'
import {Box, Link} from '@primer/components'
import PageLink from './PageLink'

const SectionLink = ({href, router, currentPath, next, ...rest}) => {
  const Tag = next ? PageLink : Link
  return (
    <Box mb={3} color='gray.9' {...rest}>
      <Tag href={href} {...rest} fontSize={2} fontWeight={currentPath.startsWith(href) ? 'bold' : null} />
    </Box>
  )
}

export default SectionLink
