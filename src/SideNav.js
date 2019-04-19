import React from 'react'
import {Box, Flex, Relative} from '@primer/components'

function SideNav(props) {
  return (
    <Box height="100vh">
      <Relative as="nav">
        <Box {...props}>
          <Flex flexDirection="column" alignItems="start">
            {props.children}
          </Flex>
        </Box>
      </Relative>
    </Box>
  )
}

export default SideNav
