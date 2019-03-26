export default {
  "/": {
    "title": "Primer Blueprints",
    "path": "/",
    "content": "\n# Introduction\n\nThese components are to be used to build documentation sites across our different Primer projects.\n"
  },
  "content-components/clipboard-copy": {
    "title": "ClipboardCopy",
    "path": "content-components/clipboard-copy",
    "content": "\nUse the ClipboardCopy component to add copying functionality next to code blocks in documentation.\nThe `value` prop must be provided with the current value of the code block.\n\n```.jsx\n<ClipboardCopy value={'hihihi'}/>\n\n```\n\n\n## Component props\n\n| Name | Type | Default | Description |\n| :- | :- | :-: | :- |\n| value | String | | The content that will be added to the user's clipboard when clicked.\n"
  },
  "content-components/code-example": {
    "title": "CodeExample",
    "path": "content-components/code-example",
    "content": "\nUse the CodeExample component to wrap HTML code examples. This component was created to prevent CSS from our markdown styles from bleeding over into examples by displaying examples in an iframe.\n\nThis component can also be passed to the component prop of your MDXProvider to replace all code blocks with CodeExample like so:\n\n```\nconst components = {\n  code: CodeExample\n}\n\nreturn (\n  <MDXProvider components={components}>\n    <Component {...page} />\n  </MDXProvider>\n)\n\n```\n\n```.jsx\n<CodeExample>\n  <div>hello world!</div>\n</CodeExample>\n\n```\n"
  },
  "content-components/contributors": {
    "title": "Contributors",
    "path": "content-components/contributors",
    "content": "\nUse the Contributors component to add contributor credit to the bottom of any docs page. With a provided file path & repo path, the component will fetch commit data from the GitHub API and display all contributors to that file. In instances where you'd like to add additional contributor credits that are not reflected in the commit data (for example, if a repository has been moved and the git history lost) you can use the `contributor` prop to add additional contributors.\n\n\n```.jsx\n<Contributors\n  filePath='README.md'\n  repoPath='primer/components'\n  contributors={[{login: 'emplums'}, {login: 'broccolini'}]}\n/>\n```\n\n## Component props\n\n| Name | Type | Default | Description |\n| :- | :- | :-: | :- |\n| filePath | String | | The path to the file you'd like to pull contributor data from. |\n| repoPath | String | | The repository path on GitHub. For example: `primer/components` |\n| contributors | Array | | Prop for adding additional contributors not reflected in commit history. Format is an array of objects with a `login` key. Ex. `[{login: 'emplums'}, {login: 'broccolini'}]` |\n"
  },
  "content-components": {
    "title": "Content Components",
    "path": "content-components",
    "content": "\n Components are reusable React components that can be used to build UI for our documentation sites.\n"
  },
  "content-components/frame": {
    "title": "Frame",
    "path": "content-components/frame",
    "content": "\nThe Frame component wraps children components in an iframe\n\n\n```.jsx\n<Frame minHeight={50}>\n  <Text>Hi</Text>\n</Frame>\n```\n\n## Component props\n\n| Name | Type | Default | Description |\n| :- | :- | :-: | :- |\n| minHeight | String or Number | 0 | minHeight of iframe\n| border | String | 0 | border for element\n| borderRadius | String or Number | 0 | borderRadius for element\n| width | String or Number | 100% | width of iframe\n"
  },
  "content-components/link": {
    "title": "Link",
    "path": "content-components/link",
    "content": "\nUse the Link component to add links within documentation. The link component wraps the standard Primer link with Next's link component for easy routing in Next.js applications.\n\n```.jsx\n<Link href=\"https://github.com/primer\">Primer</Link>\n\n```\n"
  },
  "navigation-components/header": {
    "title": "Header",
    "path": "navigation-components/header",
    "keywords": [
      "navigation",
      "header"
    ],
    "content": "\nUse Header to provide a top navigation for your site. Children of `Header` will be rendered on the right side of the component. Children should be top level navigation links. The `title` prop specifies what should be rendered to the right of the GitHub Mark. The `root` prop specifies where you'd like the GitHub Mark to link to. Leave blank if you'd like it to route to `/`.\n```.jsx\n<Header title=\"Hello world!\" root='/blueprints'>\n  <NavDropdown title={`What's new`}>\n    <NavItem>Overview</NavItem>\n    <NavItem>Interface Guidelines</NavItem>\n    <NavItem>Octicons</NavItem>\n  </NavDropdown>\n  <NavDropdown title='Design'>\n    <NavItem>Overview</NavItem>\n    <NavItem>Interface Guidelines</NavItem>\n    <NavItem>Octicons</NavItem>\n  </NavDropdown>\n  <NavDropdown title='Development'>\n    <NavItem>Overview</NavItem>\n    <NavItem>Interface Guidelines</NavItem>\n    <NavItem>Octicons</NavItem>\n  </NavDropdown>\n  <NavDropdown title='Content'>\n    <NavItem>Overview</NavItem>\n    <NavItem>Interface Guidelines</NavItem>\n    <NavItem>Octicons</NavItem>\n  </NavDropdown>\n  <NavDropdown title='Tools'>\n    <NavItem>Overview</NavItem>\n    <NavItem>Interface Guidelines</NavItem>\n    <NavItem>Octicons</NavItem>\n  </NavDropdown>\n</Header>\n```\n"
  },
  "navigation-components/section": {
    "title": "Section",
    "path": "navigation-components/section",
    "content": "\nA `Section` gets a `path` and optional children. If it has children it will\nrender those and prepend each child's `href` prop with the provided `path`.\nThis means that you can do:\n\n```.jsx\n<Section path=\"/section\">\n  <Section.Link href=\"foo\">Links to /section/foo</Section.Link>\n</Section>\n```\n\nIf no children are provided, it renders a [`NavList`](/blueprints/nav-components/NavList) with the provided\n`path`.\n"
  },
  "navigation-components/nav-link": {
    "title": "NavLink",
    "path": "navigation-components/nav-link",
    "content": "\nThe NavLink component is a PageLink that turns black when it's href matches the current path. NavLinks are typically used in sidebar sub-navigation.\n\n\n```.jsx\nMatches current path:\n<NavLink mb={4} href='/blueprints/navigation-components/NavLink' />\n\nDoes not match current path:\n<NavLink href='/blueprints/navigation-components/Section' />\n```\n"
  },
  "navigation-components": {
    "title": "Navigation Components",
    "path": "navigation-components",
    "content": "\nNavigation components can be used to build navigation on documentation sites\n"
  },
  "navigation-components/nav-list": {
    "title": "NavList",
    "path": "navigation-components/nav-list",
    "content": "\n\nA `<NavList>` renders a `<Section.Link>` for the given `path` and looks up the\npath in the page tree. If a node is found, it renders a `<NavLink>` for each\nof the node's children.\n\nThe automatically generated page links in a NavList are sorted alphabetically by either the sort_title or title frontmatter keys. If a page has a non-empty sort_title, that value is used only to determine its position in the list; otherwise, the title determines their sort order. The title key is always used as a page's link text.\n\n\n```.jsx\n<NavList path='/blueprints/content-components'/>\n```\n"
  },
  "navigation-components/route-match": {
    "title": "RouteMatch",
    "path": "navigation-components/route-match",
    "content": "\nUse `RouteMatch` to conditionally render content without a wrapper\nelement when contained directly in a `Router`. `RouteMatch` is most commonly used to conditionally render a chunk of side navigation links.\n\n\n```.jsx\n<Router>\n  <RouteMatch path=\"/blueprints/navigation-components\">\n    <Box>this will only show up on pages whose path begins with \"/blueprints/navigation-components\"</Box>\n  </RouteMatch>\n  <RouteMatch path=\"/blueprints/content-components\">\n    <Box>this will only show up on pages whose path begins with \"/blueprints/content-components\"</Box>\n  </RouteMatch>\n</Router>\n\n```\n"
  },
  "navigation-components/page-link": {
    "title": "PageLink",
    "path": "navigation-components/page-link",
    "content": "\nThe PageLink component takes an `href` and optional `children`.\nIf no `children` are provided, we look up the \"node\" of the corresponding\npage in the tree (the one whose `path` matches the given `href`) and use\nthat node's `title` frontmatter key. In other words, given the following\npages/foo/bar.md:\n\n```md\n---\ntitle: Foo Bar\n---\n```\n\nThe following instance of PageLink should render a link to \"/foo/bar\" with\n\"Foo Bar\" as its text:\n```.jsx\n<PageLink href=\"/foo/bar\" />\n```\n"
  },
  "navigation-components/side-nav": {
    "title": "SideNav",
    "path": "navigation-components/side-nav",
    "content": "\n\nContainer component that takes children and nests them in a Router with layout styling. The `SideNav` of this site uses `Section` components to show both the Content Components and Navigation Components sections. See [the `Section` docs](/blueprints/navigation-components/section) for more details.\n\nYou may also use the `RouteMatch` components in your `SideNav` to conditionally show specific navigation links in the SideNav depending on where you are on the docs site. See [`RouteMatch` docs](/blueprints/navigation-components/section) for more details.\n\n\n```.jsx\n<SideNav>\n  <RouteMatch path=\"/blueprints\">\n    <Section path=\"content-components\" />\n  </RouteMatch>\n</SideNav>\n```\n"
  },
  "tools": {
    "title": "Tools",
    "path": "tools",
    "content": "\nComing soon\n"
  }
}