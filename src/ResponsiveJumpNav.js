import React from 'react'
import {Link as PrimerLink, BorderBox, Box} from '@primer/components'
import Header from './Header'
import NavDropdown from './NavDropdown'
import Link from './Link'

const DropdownLink = ({href, children}) => <Box mt={2}><Link fontSize={1} href={href}>{children}</Link></Box>

const ResponsiveJumpNav = ({root, subfolder}) => {
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      <PrimerLink color="black" fontWeight="bold" my={2} href="https://primer.style/news">
        What’s New
      </PrimerLink>
      <NavDropdown.Responsive color='black' my={2} title="Design">
        <DropdownLink href="https://primer.style/design">Interface Guidelines</DropdownLink>
        <DropdownLink href="https://octicons.github.com/">Icons</DropdownLink>
        <DropdownLink href="https://github.com/primer/presentations">Presentations</DropdownLink>
      </NavDropdown.Responsive>
      <NavDropdown.Responsive my={2} color='black' title="Development">
        <DropdownLink href="https://primer.style/css">Primer CSS</DropdownLink>
        <DropdownLink href="https://primer.style/components">Primer Components</DropdownLink>
        <DropdownLink href="https://github.com/primer/deploy">Deploy</DropdownLink>
        <DropdownLink href="https://primer.style/css/tools/prototyping">Prototyping</DropdownLink>
      </NavDropdown.Responsive>
      <NavDropdown.Responsive  my={2} color='black' title="Tools">
        <DropdownLink href="https://primer.style/css/tools/atom-packages">Atom packages</DropdownLink>
        <DropdownLink href="https://primer.style/css/tools/docset">Docs set</DropdownLink>
        <DropdownLink href="https://primer.style/css/tools/local-primer">GitHub local environment</DropdownLink>
        <DropdownLink href="https://primer.style/css/tools/linting">Linting</DropdownLink>
      </NavDropdown.Responsive>
    </BorderBox>
  )
}

export default ResponsiveJumpNav
