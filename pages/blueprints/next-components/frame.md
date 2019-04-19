---
title: Frame
path: next-components/frame
---
**This component only works in Next.js applications. We are currently working to decouple it from Next.js**

The Frame component wraps children components in an iframe.


```.jsx
<Frame minHeight={50}>
  <Text>Hi</Text>
</Frame>
```

## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| minHeight | String or Number | 0 | minHeight of iframe
| border | String | 0 | border for element
| borderRadius | String or Number | 0 | borderRadius for element
| width | String or Number | 100% | width of iframe
