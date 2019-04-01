---
title: CodeExample
path: content-components/code-example
---

Use the CodeExample component to wrap HTML code examples. This component was created to prevent CSS from our markdown styles from bleeding over into examples by displaying examples in an iframe.

This component can also be passed to the component prop of your MDXProvider to replace all code blocks with CodeExample like so:

```
const components = {
  code: CodeExample
}

return (
  <MDXProvider components={components}>
    <Component {...page} />
  </MDXProvider>
)

```

```html
<div class="flash">
  <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
  <p>And this is another paragraph.</p>
</div>
```
