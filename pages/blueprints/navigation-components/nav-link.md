---
title: NavLink
path: navigation-components/nav-link
---

The NavLink component is a PageLink that turns black when it's href matches the current path. NavLinks are typically used in sidebar sub-navigation.


```.jsx
Matches current path:
<NavLink mb={4} href='/blueprints/navigation-components/NavLink' />

Does not match current path:
<NavLink href='/blueprints/navigation-components/Section' />
```
