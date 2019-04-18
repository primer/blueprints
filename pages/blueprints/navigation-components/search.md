---
title: Search
path: navigation-components/search
---


The `Search` component is embedded in our `Header` component, but can also be used on it's own to enable searching of your documentation site.

The `Search` component uses [](lunr) to search through a user provided array of objects containing text to search.

Use our search plugin to generate an array of documents to search. This will generate a `searchIndex.js` file in your root directory, which you can import and pass to `Search` via the `documents` prop.


```
// In Next.config:

webpack(config, options) {
  config.module.rules.push({
    test: /\.mdx?$/,
    use: require.resolve('@primer/blueprints/lib/search-loader')
  })
  return config
}

// Or, in webpack.config:

  module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: require.resolve('@primer/blueprints/lib/search-loader')
        }
      ]
  }

  // In component using Search:


  import documents from `./SearchIndex`

  <Search documents={documents} subfolder='blueprints' next/>
```


## Component props

| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| documents | Array | | Documents to search through. |
| subfolder | String | | Used to generate link paths |
| next | Boolean| false | Set to true if you're using a Next.js setup and clicks on search results will route via next/router. |
