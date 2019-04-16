---
title: NavLink
path: navigation-components/nav-link
---

The NavLink component is a Link that turns black when it's href matches the current path. NavLinks are typically used in sidebar sub-navigation. If you are using a Next.js application with our [pages plugin](https://github.com/primer/next-pages), you can pass true for the `next` prop and a [next/link](https://github.com/zeit/next.js/#with-link) link will be used.


```.jsx
Matches current path:
<NavLink mb={4} href='/blueprints/navigation-components/NavLink' currentPath='/blueprints/navigation-components/NavLink'>
  NavLink
</NavLink>

Does not match current path:
<NavLink mb={4} href='/blueprints/navigation-components/NavLink' currentPath='/blueprints/navigation-components/SideNav'>
  SideNav
</NavLink>
```

## Component props

| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| href | String | | The URL the link refers to |
| currentPath | String | | The current page. Pass this down as a string from your router |
| next | Boolean| false | Set to true if you're using a Next.js setup with our pages plugin and link titles will automatically be generated + a [next/link](https://github.com/zeit/next.js/#with-link) will be used in place of a traditional link. |
