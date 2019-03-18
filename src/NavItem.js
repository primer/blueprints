import {theme, Link} from '@primer/components'
import styled from 'styled-components'

const NavItem = styled(Link)`
  color: ${theme.colors.blue[2]};
  display: block;
  padding: 0 ${theme.space[3]}px;
  line-height: 30px;
  white-space: nowrap;
  &:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.blue[4]};
    text-decoration: none;
  }
  &:last-child:hover {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &:first-child:hover {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`

export default NavItem
