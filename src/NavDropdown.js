import React from 'react'
import styled from 'styled-components'
import {Text, Details, Absolute, BorderBox, theme, Box} from '@primer/components'
import {get} from './constants'

const DropdownItem = styled.a`
  color: ${theme.colors.blue[2]};
  display: block;
  padding: 0 ${theme.space[3]}px;
  line-height: 30px;
  &:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.blue[4]};
  }
  &:last-child:hover {
    border-bottom-left-radius: ${theme.radii[2]}px;
    border-bottom-right-radius: ${theme.radii[2]}px;
  }
  &:first-child:hover {
    border-top-left-radius: ${theme.radii[2]}px;
    border-top-right-radius: ${theme.radii[2]}px;
  }
`

export default function NavDropdown({children}) {
  return (
    <Box>
      <Details overlay mx={3} render={({toggle}) => (
        <>
          <Text fontWeight='bold' color='blue.2' is="summary" onClick={toggle}>{children}</Text>
          <Absolute is={BorderBox} borderRadius={2} zIndex={90} borderColor='blue.1' bg='black' >
              <DropdownItem>Overview</DropdownItem>
              <DropdownItem>Interface Guidelines</DropdownItem>
              <DropdownItem>Icons</DropdownItem>
          </Absolute>
        </>
      )}
      />
    </Box>
  )
}

DropdownItem.defaultProps = { theme }
