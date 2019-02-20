---
title: Header
path: components/header
---

Use Header to provide a top navigation for your site. Children of `Header` will be rendered on the right side of the component. Children should be top level navigation links. The `title` prop specifies what should be rendered to the right of the GitHub Mark. The `root` prop specifies where you'd like the GitHub Mark to link to. Leave blank if you'd like it to route to `/`.
```.jsx
<Header title="Hello world!" root='blueprints'>
  <NavLink href="/blueprints">Docs</NavLink>
</Header>
```
