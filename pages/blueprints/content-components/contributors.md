---
title: Contributors
---

Use the Contributors component to add contributor credit to the bottom of any docs page. With a provided file path & repo path, the component will fetch commit data from the GitHub API and display all contributors to that file. In instances where you'd like to add additional contributor credits that are not reflected in the commit data (for example, if a repository has been moved and the git history lost) you can use the `contributor` prop to add additional contributors.


```.jsx
<Contributors
  filePath='README.md'
  repoPath='primer/components'
  contributors={[{login: 'emplums'}, {login: 'broccolini'}]}
/>
```

## Component props

| Name | Type | Default | Description |
| :- | :- | :-: | :- |
| filePath | String | | The path to the file you'd like to pull contributor data from. |
| repoPath | String | | The repository path on GitHub. For example: `primer/components` |
| contributors | Array | | Prop for adding additional contributors not reflected in commit history. Format is an array of objects with a `login` key. Ex. `[{login: 'emplums'}, {login: 'broccolini'}]` |
