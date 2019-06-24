import React from 'react'
import HTMLtoJSX from 'html-2-jsx'
import {Absolute, BorderBox, Box, StyledOcticon as Octicon, Relative, Text} from '@primer/components'
import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live'
import {getIconByName} from '@githubprimer/octicons-react'
import ClipboardCopy from '../src/ClipboardCopy'
import Frame from './Frame'
import prismTheme from 'prism-react-renderer/themes/duotoneLight'

const LANG_PATTERN = /\blanguage-\.?(jsx?|html)\b/

const converter = new HTMLtoJSX({
  indent: '  ',
  createClass: false
})

const defaultTransform = code => `<React.Fragment>${code}</React.Fragment>`

const languageTransforms = {
  html: html => defaultTransform(converter.convert(html)),
  jsx: defaultTransform
}

export default function CodeExample(props) {
  const {children, dangerouslySetInnerHTML, dead, source, ...rest} = props
  const lang = getLanguage(props.className)
  if (lang && !dead) {
    const liveProps = {
      code: source,
      scope: {Octicon, getIconByName},
      transformCode: getTransformForLanguage(lang),
      mountStylesheet: false
    }
    return (
      <LiveProvider {...liveProps}>
        <BorderBox {...rest}>
          <BorderBox bg="white" p={3} border={0} borderBottom={1} borderRadius={0}>
            <Frame>
              <LivePreview />
              {children}
            </Frame>
          </BorderBox>
          <Box as={Relative} bg="gray.1" p={3}>
            <LiveEditor theme={prismTheme} style={{margin: 0, padding: 0}} />
            <Absolute right={0} top={0} m={3}>
              <ClipboardCopy value={source} />
            </Absolute>
            <Text
              as={LiveError}
              fontFamily="mono"
              style={{
                overflow: 'auto',
                whiteSpace: 'pre'
              }}
            />
          </Box>
        </BorderBox>
      </LiveProvider>
    )
  } else {
    // eslint-disable-next-line react/no-danger-with-children
    return <BorderBox data-source={source} as="pre" {...{children, dangerouslySetInnerHTML}} />
  }
}

CodeExample.defaultProps = {
  my: 4
}

function getLanguage(className) {
  const match = className && className.match(LANG_PATTERN)
  return match ? match[1] : undefined
}

function getTransformForLanguage(lang) {
  return lang in languageTransforms ? languageTransforms[lang] : null
}
