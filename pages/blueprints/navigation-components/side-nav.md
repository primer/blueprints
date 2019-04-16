---
title: SideNav
path: navigation-components/side-nav
---


Container component that takes children and adds layout styling. The `SideNav` of this site uses `SectionLink` components to show the different component sections.

Make sure to nest `SideNav` in a router of your choice. On this site, we use the `Router` component, which uses the Next.js router, but you may use any router library you'd like.

You may also use the `RouteMatch` components in your `SideNav` to conditionally show specific navigation links in the SideNav depending on where you are on the docs site. See [`RouteMatch` docs](/blueprints/navigation-components/section) for more details.


```.jsx
<SideNav>
  <RouteMatch path="/blueprints">
    <NavList currentPath='/blueprints/navigation-components/side-nav' path="/blueprints/navigation-components" />
  </RouteMatch>
</SideNav>
```
