import React from 'react'
import styled from 'styled-components'
import {Text, Details, Absolute, BorderBox, theme} from '@primer/components'
import {get} from './constants'


export default function NavDropdown() {
  return (
    <Details>
      <Text fontWeight='bold' color='blue.2' is="summary">Design</Text>
      <Absolute is={BorderBox} borderColor='blue.1' bg='black' >
          <DropdownItem theme={theme}>Overview</DropdownItem>
          <DropdownItem theme={theme}>Interface Guidelines</DropdownItem>
          <DropdownItem theme={theme}>Icons</DropdownItem>
      </Absolute>
    </Details>
  )
}


const DropdownItem = styled.a`
  color: ${get('blue.2')};
  backgroundColor: ${get('black')};
  &:hover {
    color: ${get('black')};
    backgroundColor: ${get('blue.4')}
  }
`

DropdownItem.defaultProps = { theme }
