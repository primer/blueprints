import {Flex, StyledOcticon} from '@primer/components'
import {Search, X} from '@githubprimer/octicons-react'
import React, {useState} from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const StyledButton = styled.button`
  background: none;
  display: inline-block;
  color: #c8e1ff;
  margin-right: 16px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid;
  border-color: #586069;
  border-radius: 3px;
  height: 38px;

  &:hover,
  &:focus {
    color: #c8e1ff;
    background-color: #0366d6;
    background-image: none;
    border-color: #0366d6;
  }
`

const ResponsiveSearchInput = props => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    if (open) {
      props.closeMenu()
    }
    setOpen(!open)
  }
  return (
    <Flex>
      {open && <SearchInput mr={3} {...props} />}
      <StyledButton onClick={handleClick}>
        <StyledOcticon icon={open ? X : Search} />
      </StyledButton>
    </Flex>
  )
}

export default ResponsiveSearchInput
