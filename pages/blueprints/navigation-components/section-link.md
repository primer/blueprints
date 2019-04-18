---
title: SectionLink
path: navigation-components/section-link
---


The `SectionLink` component is used for top level links in the sidebar. These links will be styled with a bold font weight when itself or any of it's sublinks are the current url.

```.jsx

<SectionLink href='/blueprints/content-components' currentPath='/blueprints/content-components'>Content Components</SectionLink>

<SectionLink href='/blueprints/navigation-components' currentPath='/blueprints/content-components' next />

```


## Component props

| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| next | boolean | | Whether or not to use next/link for the link. If not using Next.js be sure to provide children to render as the link text. |
| href | String | | The URL to navigate the user to on click.
| currentPath | String | | The current page. Pass this down as a string from your router |
