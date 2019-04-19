---
title: NavDropdown
path: navigation-components/nav-dropdown
---

The NavDropdown component is used to create dropdown navigation links in a site header. Use with `NavItem`.

```.jsx
<Box bg='gray.9'>
  <NavDropdown title="Design">
    <NavItem href="https://primer.style/design">Interface Guidelines</NavItem>
    <NavItem href="https://octicons.github.com/">Octicons</NavItem>
    <NavItem href="https://primer.style/css/tools/prototyping">Prototyping</NavItem>
  </NavDropdown>
</Box>
```


## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| title | String |  | String used in the dropdown target. |
| color| String |  | Sets the text color |
| direction | String | 'se' | The direction that the dropdown menu should dropdown from in relation to the dropdown target. |
