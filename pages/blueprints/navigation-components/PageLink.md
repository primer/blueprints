---
title: PageLink
---

The PageLink component takes an `href` and optional `children`.
If no `children` are provided, we look up the "node" of the corresponding
page in the tree (the one whose `path` matches the given `href`) and use
that node's `title` frontmatter key. In other words, given the following
pages/foo/bar.md:

```md
---
title: Foo Bar
---
```

The following instance of PageLink should render a link to "/foo/bar" with
"Foo Bar" as its text:
```.jsx
<PageLink href="/foo/bar" />
```
