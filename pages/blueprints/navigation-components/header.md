---
title: Header
path: navigation-components/header
keywords: [navigation, header]
---

Use Header to provide a top navigation for your site. Children of `Header` will be rendered on the right side of the component. Children should be top level navigation links. The `title` prop specifies what should be rendered to the right of the GitHub Mark. The `root` prop specifies where you'd like the GitHub Mark to link to. Leave blank if you'd like it to route to `/`.
```.jsx
<Header title="Hello world!" root='/blueprints'>
  <NavDropdown title={`What's new`}>
    <NavItem>Overview</NavItem>
    <NavItem>Interface Guidelines</NavItem>
    <NavItem>Octicons</NavItem>
  </NavDropdown>
  <NavDropdown title='Design'>
    <NavItem>Overview</NavItem>
    <NavItem>Interface Guidelines</NavItem>
    <NavItem>Octicons</NavItem>
  </NavDropdown>
  <NavDropdown title='Development'>
    <NavItem>Overview</NavItem>
    <NavItem>Interface Guidelines</NavItem>
    <NavItem>Octicons</NavItem>
  </NavDropdown>
  <NavDropdown title='Content'>
    <NavItem>Overview</NavItem>
    <NavItem>Interface Guidelines</NavItem>
    <NavItem>Octicons</NavItem>
  </NavDropdown>
  <NavDropdown title='Tools'>
    <NavItem>Overview</NavItem>
    <NavItem>Interface Guidelines</NavItem>
    <NavItem>Octicons</NavItem>
  </NavDropdown>
</Header>
```
