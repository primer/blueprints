---
title: Header
path: navigation-components/header
keywords: [navigation, header]
---

Use Header to provide a top navigation for your site. Children of `Header` will be rendered on the right side of the component. Children should be top level navigation links. The `title` prop specifies what should be rendered to the right of the GitHub Mark. The `root` prop specifies where you'd like the GitHub Mark to link to. Leave blank if you'd like it to route to `/`.
```.jsx
<Header title="Primer" subtitle='Blueprints' documents={documents} root='https://primer.style' subfolder='blueprints' next>
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



## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| title | String |  | The parent site title, will be displayed to the right of the GitHub mark. |
| subtitle | String |  | If your site is a subsite (eg. Blueprints is a subsite of Primer), specify here and it will be displayed to the right of the title |
| root | String |  | The root URL for your site, used to create navigation links (example: `https://primer.style`) |
| subfolder | String |  | The subfolder for your site, used to create navigation links (ex - `blueprints`). Will be added to the `root` provided to generate links. |
| documents | Object | | The documents you'd like to use for the search index. |
| next | Boolean | | Pass in `true` if you'd like to use Next.js router links in place of standard links |
