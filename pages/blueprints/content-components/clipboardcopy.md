---
title: ClipboardCopy
path: content-components/clipboard-copy
---

Use the ClipboardCopy component to add copying functionality next to code blocks in documentation.
The `value` prop must be provided with the current value of the code block.

```.jsx
<ClipboardCopy value={'hihihi'}/>

```


## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| value | String | | The content that will be added to the user's clipboard when clicked.
