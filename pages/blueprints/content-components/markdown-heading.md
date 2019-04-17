---
title: MarkdownHeading
path: content-components/markdown-heading
---

The MarkdownHeading component is used to replace traditional MDX headings with a GitHub style markdown heading. This heading also included the AnchorLink on hover.

If you're using an MDXProvider, you can replace all heading tags with `MarkdownHeading`s like so:

```
const H1 = props => <MarkdownHeading {...props} />
const H2 = props => <MarkdownHeading as="h2" {...props} />
const H3 = props => <MarkdownHeading as="h3" {...props} />
const H4 = props => <MarkdownHeading as="h4" {...props} />
const H5 = props => <MarkdownHeading as="h5" {...props} />

function getComponents() {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
  }
}

...

<MDXProvider components={getComponents(page)}>
...
</MDXProvider>


```




```.jsx
<MarkdownHeading>Hello world!</MarkdownHeading>
<MarkdownHeading as='h2'>Hello world!</MarkdownHeading>
<MarkdownHeading as='h3'>Hello world!</MarkdownHeading>
<MarkdownHeading as='h4'>Hello world!</MarkdownHeading>
<MarkdownHeading as='h5'>Hello world!</MarkdownHeading>
```


## Component props
## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| as | String or Component | h1 | Sets the tag used in the Heading
