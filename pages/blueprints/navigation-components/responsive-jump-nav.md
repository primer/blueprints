---
title: ResponsiveJumpNav
path: navigation-components/responsive-jump-nav
---


This is a responsive version of the JumpNav component. JumpNav components are meant to be used for primer.style sites only. It contains all the links to other primer.style sites in dropdown menus for each category.

At larger breakpoints, the `JumpNav` component in the Header is hidden, and the `ResponsiveJumpNav` component is displayed at the bottom of the page.

 `ResponsiveJumpNav` is meant to sit above the `SideNav` component and be hidden at larger breakpoints. See the example below for our approach at doing so.


```.jsx
  <Box display={['block', 'block', 'block', 'none']}>
    <ResponsiveJumpNav />
  </Box>
  ```

  ## Component props

  `ResponsiveJumpNav` takes no props.
