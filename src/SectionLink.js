import React from 'react'
import {Box, Link} from '@primer/components'

const SectionLink = ({href, currentPath, link: Tag, ...rest}) => {
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
  link: Link
}

export default SectionLink
