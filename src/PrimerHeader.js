import {Link} from '@primer/components'
import Header from './Header'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const PrimerHeader = ({root}) => {
  return (
    <Header title="Primer" subtitle='Blueprints' root={root}>
      <Link color='blue.2' fontWeight='bold' href='https://primer.style/news'>What's New</Link>
      <NavDropdown title='Design'>
        <NavItem href="https://primer.style/design">Interface Guidelines</NavItem>
        <NavItem href="https://octicons.github.com/">Icons</NavItem>
        <NavItem href="https://github.com/primer/presentations">Presentations</NavItem>
      </NavDropdown>
      <NavDropdown title='Development'>
        <NavItem href="https://primer.style/css">Primer CSS</NavItem>
        <NavItem href="https://primer.style/components">Primer Components</NavItem>
        <NavItem href="https://github.com/primer/deploy">Deploy</NavItem>
        <NavItem href="https://primer.style/css/tools/prototyping">Prototyping</NavItem>
      </NavDropdown>
      <NavDropdown direction='sw' title='Tools'>
        <NavItem href="https://primer.style/css/tools/atom-packages">Atom packages</NavItem>
        <NavItem href="https://primer.style/css/tools/docset">Docs set</NavItem>
        <NavItem href="https://primer.style/css/tools/local-primer">GitHub local environment</NavItem>
        <NavItem href="https://primer.style/css/tools/linting">Linting</NavItem>
      </NavDropdown>
    </Header>
  )
}

export default PrimerHeader
