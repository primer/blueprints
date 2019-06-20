# Primer Blueprints

This project hosts React components and utilities for building [Primer](https://primer.style) documentation sites.

:point_right: **Visit [primer.style/blueprints](https://primer.style/blueprints) to learn more!**

## Installation

```
npm install @primer/blueprints react react-dom styled-components
```

## Usage
Wrap your configuration in the `@primer/blueprints/configure` export in your project's `next.config.js`:

```js
const configure = require('@primer/blueprints/configure')
module.exports = configure({
  env: {
    // your env vars here
  }
})
```

### Now v2
When deploying to Now v2, be sure to provide the `target: 'serverless'` configuration option:

```diff
module.exports = configure({
+  target: 'serverless', // required for Now v2
  env: {
    // your env vars here
  }
})
```

### Configuration features
Our configuration provides the following features:

1. Conversion of `.svg` files into React components with [svgr](https://www.npmjs.com/package/@svgr/webpack), as in:

    ```jsx
    import SomeImage from '../assets/some-image.svg'
    export default props => <SomeImage width="100%" {...props} />
    ```

1. Export of bitmap images (`.gif`, `.jpg`, `.png`, and `.ico`) as static files with [file-loader](https://github.com/webpack-contrib/file-loader):

    ```js
    import myImagePath from '../assets/image.gif'
    export default props => <img src={myImagePath} {...props} />
    ```

1. [MDX](https://github.com/mdx-js/mdx) support, plus a bunch of other goodies:

    * [YAML frontmatter](https://jekyllrb.com/docs/front-matter/) support, which is available when you `import` or `require()` any MDX file in your app.
    * [GitHub emoji](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) with [remark-emoji](https://github.com/rhysd/remark-emoji)
    * Syntax highlighting with [rehype-prism](https://github.com/mapbox/rehype-prism)
    * Table of contents with [remark-toc](https://github.com/remarkjs/remark-toc)
    * Markdown images

### Components
General-purpose React components are available as named exports from `@primer/blueprints`:

```js
import {Header, ClipboardCopy, StatusLabel} from '@primer/blueprints'
```

### Next.js components
React components for use in Next.js sites are _only_ exported from `@primer/blueprints/next-components`:

```js
import {Link, Frame, CodeExample} from '@primer/blueprints/next-components'
```
