---
title: Section
---

A `Section` gets a `path` and optional children. If it has children it will
render those and prepend each child's `href` prop with the provided `path`.
This means that you can do:

```.jsx
<Section path="/section">
  <Section.Link href="foo">Links to /section/foo</Section.Link>
</Section>
```

If no children are provided, it renders a `NavList` with the provided
`path`.
