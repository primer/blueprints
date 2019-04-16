---
title: NavList
path: navigation-components/nav-list
---

***This component only works in Next.js applications which use our [pages plugin](https://github.com/primer/next-pages). If you are not using Next.js or our pages plugin, manually create your own NavList using `<SectionLink>` components.***

A `<NavList>` renders a `<SectionLink>` for the given `path` and looks up the path in the page tree. If a node is found, it renders a `<NavLink>` for each of the node's children.

The automatically generated page links in a NavList are sorted alphabetically by either the sort_title or title front matter keys. If a page has a non-empty sort_title, that value is used only to determine its position in the list; otherwise, the title determines their sort order. The title key is always used as a page's link text.

If the current path matches the link's path, the link will appear bold.


```.jsx
<NavList path='/blueprints/navigation-components' currentPath='/blueprints/navigation-components/nav-list'/>
```

## Component props

| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| path | String | | The path in `pages` that you'd like to generate a NavList ffor |
| currentPath | String | | The current page. Pass this down as a string from your router |
