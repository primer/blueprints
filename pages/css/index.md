import {Box, Flex, Heading, Link, Text} from '@primer/components'
import {
  HeaderImage,
  MetaPackageBox,
  PrimerPackageBox,
  PrimitivesOverview,
  StylesOverview
} from '../../src/landing'
import {CONTENT_MAX_WIDTH} from '../../src/constants'

export const Hero = () => (
  <Box bg="black">
    <Box maxWidth={CONTENT_MAX_WIDTH} p={6} mx="auto" mb={3}>
      <Box mt={4} mb={4}>
        <Heading color="blue.4" fontSize={7} pb={3} m={0}>
          Primer CSS
        </Heading>
        <Box is={HeaderImage} mb={6} />
      </Box>
    </Box>
  </Box>
)

# Introduction

Our goal is to create a system that enables us to build consistent user experiences with ease, yet with enough flexibility to support the broad spectrum of GitHub websites. This goal is embedded in our design and code decisions. Our approach to CSS is influenced by Object Oriented CSS principles, functional CSS, and BEM architecture.
