---
title: NavLink
path: navigation-components/nav-link
---

The NavLink component is a NodeLink that turns black when it's href matches the current path


```.jsx
<Text mb={4}>Matches current path:</Text>
<NavLink href='/blueprints/navigation-components/NavLink' />

<Text mt={4}>Does not match current path:</Text>
<NavLink href='/blueprints/navigation-components/Section' />
```
