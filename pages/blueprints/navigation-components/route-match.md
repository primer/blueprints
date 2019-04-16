---
title: RouteMatch
path: navigation-components/route-match
---

Use `RouteMatch` to conditionally render content when contained directly in a `Router`. `RouteMatch` is most commonly used to conditionally render a chunk of side navigation links.


```.jsx
<Router>
  <RouteMatch path="/blueprints/navigation-components">
    <Box>this will only show up on pages whose path begins with "/blueprints/navigation-components"</Box>
  </RouteMatch>
  <RouteMatch path="/blueprints/content-components">
    <Box>this will only show up on pages whose path begins with "/blueprints/content-components"</Box>
  </RouteMatch>
</Router>

```
