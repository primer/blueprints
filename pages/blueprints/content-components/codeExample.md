---
title: CodeExample
path: components/codeexample
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

```.jsx
<CodeExample>
  <div>hello world!</div>
</CodeExample>

```
