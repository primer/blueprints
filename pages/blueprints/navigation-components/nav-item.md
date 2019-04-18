---
title: NavItem
path: navigation-components/nav-item
---


The NavItem component is used within the NavDropdown to create dropdown navigation links in a site header.

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
| href | String | | URL to be used for the link |
| underline | Boolean | false | Adds underline to the link |
| as | String | 'a' | Can be 'a', 'button', 'input', or 'summary'
