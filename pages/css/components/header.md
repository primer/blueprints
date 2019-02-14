---
title: Header
path: components/header
---

Use Header to provide a top navigation for your site. Children of `Header` will be rendered on the right side of the component. Children should be top level navigation links. The `title` prop specifies what should be rendered to the right of the GitHub Mark.
```.jsx
<Header title="Hello world!">
  <NavLink href="/css">Docs</NavLink>
</Header>
```
