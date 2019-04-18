---
title: Router
path: next-components/router
---

***This component only works in Next.js applications. If you are not using Next.js, replace this component with a router of your choice.***


The `Router` component uses the Next.js `next/router` and blends it with some of React Router's concepts. It looks for children with the `path` prop and only renders the _first_ one that matches the beginning of the current path. Children without a `path` prop are always rendered.


```.jsx

<Router>
  <RouteMatch path="/blueprints">
    <NavList currentPath='/blueprints/content-components' mt={2} path='/blueprints/content-components' />
  </RouteMatch>
</Router>

```

## Component props
`Router` does not take any props.
