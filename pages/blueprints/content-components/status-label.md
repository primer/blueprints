---
title: StatusLabel
path: content-components/status-label
---

import {Text} from '@primer/components'
import {StatusLabel, TermList} from '../../../src'

Use the status label to indicate status of a particular feature set or package.

```.jsx
<StatusLabel status='inReview'>In Review</StatusLabel>
```

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| status | String |  | Use one of the following: <TermList termComponent="code" children={StatusLabel.statuses} />. |
