import React from 'react'
import App, {Container} from 'next/app'
import {MDXProvider} from '@mdx-js/tag'
import {withMDXLive} from 'mdx-live'
import Head from 'next/head'
import * as primerComponents from '@primer/components'
import * as docsComponents from '../src/components'
import {config, requirePage, rootPage} from '../src/utils'
import {CONTENT_MAX_WIDTH} from '../src/constants'


const {Header, MarkdownHeading, SideNav, RouteMatch, PrimerHeader, NavDropdown, NavItem, Section, Link, Outline} = docsComponents
const {BaseStyles, BorderBox, Box, Flex, theme, Heading} = primerComponents
const generateId = (title) => title.toLowerCase().replace(' ', '-')

export const H1 = props => <MarkdownHeading fontSize={5} id={generateId(props.children)} fontWeight="light" {...props} />
export const H2 = props => <MarkdownHeading as='h2' fontSize={4} id={generateId(props.children)} fontWeight="light" {...props} />
export const H3 = props => <MarkdownHeading as='h3' fontSize={3} id={generateId(props.children)} fontWeight="light" {...props} />
export const H4 = props => <MarkdownHeading as='h4' fontSize={2} id={generateId(props.children)} fontWeight="light" {...props} />
export const H5 = props => <MarkdownHeading as='h5' fontSize={1} id={generateId(props.children)} fontWeight="light" {...props} />

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
    ...primerComponents
  }
}

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return {page}
  }

  render() {
    // strip the trailing slash
    const pathname = this.props.router.pathname.replace(/\/$/, '')
    const {Component, page} = this.props

    const node = rootPage.first(node => node.path === pathname) || {}
    const {file, meta = {}} = node || {}

    const Hero = file ? requirePage(file).Hero : null

    return (
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <Container>
          <Head>
            <title>Primer Blueprints{meta.title ? ` / ${meta.title}` : null}</title>
          </Head>
          <PrimerHeader root={'blueprints'}/>
          <Flex
            flexDirection={['column', 'column', 'column', 'row-reverse']}
            alignContent="stretch"
            justifyContent="space-between"
          >
            <Box width={['auto', 'auto', '100%']}>
              {Hero ? <Hero /> : null}
              <Box color="gray.9" maxWidth={['auto', 'auto', 'auto', CONTENT_MAX_WIDTH]} px={6} mx="auto" my={6}>
                <div className="markdown-body">
                  {!meta.hero && meta.title ? <MarkdownHeading id={generateId(meta.title)}>{meta.title}</MarkdownHeading> : null}
                  <MDXProvider components={getComponents(node)}>
                    <Component {...page} />
                  </MDXProvider>
                  {config.production ? null : (
                    <details>
                      <summary>Metadata</summary>
                      <pre>{JSON.stringify(meta, null, 2)}</pre>
                    </details>
                  )}
                </div>
              </Box>
            </Box>
            <BorderBox
              width={['100%', '100%', 256]}
              minWidth={256}
              bg="gray.0"
              borderColor="gray.2"
              borderRadius={0}
              border={0}
              borderRight={1}
              borderTop={[1, 1, 0, 0]}
            >
              <SideNav>
                <RouteMatch path="/blueprints">
                  <Section path="content-components" />
                  <Section path="navigation-components" />
                </RouteMatch>
              </SideNav>
            </BorderBox>
          </Flex>
        </Container>
      </BaseStyles>
    )
  }
}
