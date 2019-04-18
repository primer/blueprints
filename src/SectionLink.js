import React from 'react'
import {Box, Link} from '@primer/components'
import PageLink from './PageLink'

const SectionLink = ({href, currentPath, next, ...rest}) => {
  const Tag = next ? PageLink : Link
  return (
    <Box mb={3} {...rest}>
      <Tag
        href={href}
        color="gray.9"
        {...rest}
        fontSize={2}
        fontWeight={currentPath.startsWith(href) ? 'bold' : null}
      />
    </Box>
  )
}

SectionLink.defaultProps = {
  next: false
}

export default SectionLink
