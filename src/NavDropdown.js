import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Text, Relative, BorderBox, theme, Box, Dropdown} from '@primer/components'
import getDirectionStyles from './NavDropdownStyles'
import Details from './Details'
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

const DropdownMenu = styled.div`
  ${props => (props.direction ? getDirectionStyles(props.theme, props.direction) : '')};
`

export default function NavDropdown({children, direction}) {
  return (
    <Box>
      <Details style={{position: 'relative'}} overlay mx={3} render={({toggle}) => (
        <>
          <Text fontWeight='bold' color='blue.2' is="summary" onClick={toggle}>{children}</Text>
          <DropdownMenu as={BorderBox} style={{position: 'absolute'}} borderRadius={2} zIndex={90} borderColor='blue.1' bg='black' direction={direction}>
            <DropdownItem>Overview</DropdownItem>
            <DropdownItem>Interface Guidelines</DropdownItem>
            <DropdownItem>Icons</DropdownItem>
          </DropdownMenu>
        </>
      )}
      />
    </Box>
  )
}

DropdownMenu.propTypes = {
  direction: PropTypes.oneOf(['ne', 'e', 'se', 's', 'sw', 'w'])
}

DropdownMenu.defaultProps = {
  direction: 'sw'
}

DropdownItem.defaultProps = { theme }
