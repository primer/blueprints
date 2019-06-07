---
title: StatusLabel
path: content-components/status-label
---

import {Flex, Text} from '@primer/components'
import {StatusLabel, TermList} from '../../../src'

Use the status label to indicate status of a particular feature set or package.

```.jsx
<Flex justifyContent="space-between">
  {StatusLabel.STATUS_VALUES.map(status => (
    <StatusLabel key={status} status={status}>{status}</StatusLabel>
  ))}
</Flex>
```

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| status | String |  | Use one of the following: <TermList termComponent="code" children={StatusLabel.STATUS_VALUES} />. |
