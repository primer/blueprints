---
title: NavList
---


A `<NavList>` renders a `<Section.Link>` for the given `path` and looks up the
path in the page tree. If a node is found, it renders a `<NavLink>` for each
of the node's children.

The automatically generated page links in a NavList are sorted alphabetically by either the sort_title or title frontmatter keys. If a page has a non-empty sort_title, that value is used only to determine its position in the list; otherwise, the title determines their sort order. The title key is always used as a page's link text.


```.jsx
<NavList path='/blueprints/content-components'/>
```
