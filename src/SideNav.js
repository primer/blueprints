import React from 'react'
import {Box, Flex, Relative} from '@primer/components'
import Router from './Router'

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

export default SideNav
