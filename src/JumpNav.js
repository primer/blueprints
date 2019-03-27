import React from 'react'
import {Link} from '@primer/components'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const JumpNav = () => {
  return (
    <>
      <Link color="blue.2" fontWeight="bold" mx={3} href="https://primer.style/news">
        What’s New
      </Link>
      <Link color="blue.2" fontWeight="bold" mx={3} href="https://primer.style/team">
        Team
      </Link>
      <NavDropdown title="Design">
        <NavItem href="https://primer.style/design">Interface Guidelines</NavItem>
        <NavItem href="https://octicons.github.com/">Icons</NavItem>
        <NavItem href="https://github.com/primer/presentations">Presentations</NavItem>
      </NavDropdown>
      <NavDropdown title="Development" mr={3} direction='sw'>
        <NavItem href="https://primer.style/css">Primer CSS</NavItem>
        <NavItem href="https://primer.style/components">Primer Components</NavItem>
        <NavItem href="https://github.com/primer/deploy">Deploy</NavItem>
        <NavItem href="https://primer.style/css/tools/prototyping">Prototyping</NavItem>
      </NavDropdown>
    </>
  )
}

export default JumpNav
