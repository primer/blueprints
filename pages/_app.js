import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import {withMDXLive} from 'mdx-live'
import documents from '../searchIndex'
import styled from 'styled-components'
import Head from 'next/head'
import Pages from '@primer/next-pages'
import * as primerComponents from '@primer/components'
import withAnalytics from '../src/analytics'
import * as docsComponents from '../src'
import * as nextComponents from '../next-components'
import {CONTENT_MAX_WIDTH} from '../src/constants'

const {pageMap = new Map()} = Pages

const {MarkdownHeading, SideNav, ResponsiveJumpNav, RouteMatch, Header, JumpNav, Router, Outline} = docsComponents
const {BaseStyles, BorderBox, Box, Text, Flex, theme} = primerComponents
const {Link, NavList} = nextComponents

export const H1 = props => <MarkdownHeading {...props} />
export const H2 = props => <MarkdownHeading as="h2" {...props} />
export const H3 = props => <MarkdownHeading as="h3" {...props} />
export const H4 = props => <MarkdownHeading as="h4" {...props} />
export const H5 = props => <MarkdownHeading as="h5" {...props} />

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
`

function getComponents(page = {}) {
  const {outline: getOutline = () => []} = page
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    a: Link,
    code: withMDXLive('pre'),
    p: ({children, ...rest}) => {
      if (children === '{:toc}') {
        return <Outline outline={getOutline()} {...rest} />
      } else {
        return <p {...rest}>{children}</p>
      }
    },
    // "unwrap" <pre> elements around <code> blocks
    pre: props => props.children,
    ...docsComponents,
    ...primerComponents,
    documents
  }
}

const requirePage = require.context('.', true, /\.(js|md)x?$/)

class BlueprintsApp extends App {
  static async getInitialProps({Component, ctx}) {
    let initialProps = {}

    if (Component.getInitialProps) {
      initialProps = await Component.getInitialProps(ctx)
    }

    return {initialProps}
  }

  render() {
    // strip the trailing slash
    const pathname = this.props.router.pathname.replace(/\/$/, '')
    const {Component, initialProps} = this.props

    const page = pageMap.get(pathname) || {}
    const {meta = {}, requirePath} = page
    const Hero = requirePath ? requirePage(requirePath).Hero : null

    return (
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer Blueprints{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
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
          <Flex
            flexDirection={['column', 'column', 'column', 'row-reverse']}
            alignContent="stretch"
            justifyContent="space-between"
          >
            <Box width={['auto', 'auto', '100%']}>
              {Hero ? <Hero /> : null}
              <Box color="gray.9" maxWidth={['auto', 'auto', 'auto', CONTENT_MAX_WIDTH]} px={6} mx="auto" my={6}>
                <div className="markdown-body">
                  {!meta.hero && meta.title ? <MarkdownHeading>{meta.title}</MarkdownHeading> : null}
                  <MDXProvider components={getComponents(page)}>
                    <Component {...initialProps} />
                  </MDXProvider>
                </div>
              </Box>
            </Box>
            <BorderBox
              width={['100%', '100%', '100%', 256]}
              minWidth={256}
              bg="gray.0"
              borderColor="gray.2"
              borderRadius={0}
              border={0}
              borderRight={1}
              borderTop={[1, 1, 0, 0]}
            >
              <Anchor id="jumpnav" />
              <Box display={['block', 'block', 'block', 'none']}>
                <ResponsiveJumpNav />
              </Box>
              <Router>
                <SideNav>
                  <Box px={5} pt={5} display={['block', 'block', 'block', 'none']}>
                    <Text fontFamily="mono">Primer CSS</Text>
                  </Box>
                  <RouteMatch path="/blueprints">
                    <NavList currentPath={pathname} mt={2} path="/blueprints/content-components" />
                    <NavList currentPath={pathname} mt={2} path="/blueprints/navigation-components" />
                    <NavList currentPath={pathname} mt={2} path="/blueprints/next-components" />
                  </RouteMatch>
                </SideNav>
              </Router>
            </BorderBox>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}

export default withAnalytics(BlueprintsApp)
