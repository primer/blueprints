---
title: JumpNav
path: navigation-components/jump-nav
keywords: [navigation, header, jumpnav]
---

The JumpNav component is meant to be used for primer.style sites only. `JumpNav` is meant to be nested in a `Header` component and aligned on the right side of the page. It contains all the links to other primer.style sites in dropdown menus for each category.


```.jsx
  <Header
    documents={documents}
    root="https://primer.style"
    subfolder="blueprints"
    title="Primer"
    subtitle="Blueprints"
    next
  >
    <JumpNav />
  </Header>
```

## Component props

`JumpNav` takes no props.
