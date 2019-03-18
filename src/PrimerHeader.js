import {Link} from '@primer/components'
import Header from './Header'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const PrimerHeader = ({root}) => {
  return (
    <Header title="Primer" subtitle='Blueprints' root={root}>
      <Link color='blue.2' fontWeight='bold' href='https://primer.style/news'>What's New</Link>
      <NavDropdown title='Design'>
        <NavItem href="https://primer.style#design">Overview</NavItem>
        <NavItem>Interface Guidelines</NavItem>
        <NavItem>Icons</NavItem>
        <NavItem>Illustrations</NavItem>
        <NavItem>Presentations</NavItem>
      </NavDropdown>
      <NavDropdown title='Development'>
        <NavItem href="https://primer.style#development">Overview</NavItem>
        <NavItem>Primer CSS</NavItem>
        <NavItem>Primer Components</NavItem>
        <NavItem>Deploy</NavItem>
        <NavItem>Prototype</NavItem>
      </NavDropdown>
      <NavDropdown direction='sw' title='Tools'>
        <NavItem href="https://primer.style#tools">Overview</NavItem>
        <NavItem>Atom packages</NavItem>
        <NavItem>Docs set</NavItem>
        <NavItem>GitHub local environment</NavItem>
        <NavItem>Linting</NavItem>
      </NavDropdown>
    </Header>
  )
}

export default PrimerHeader
