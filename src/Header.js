import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {MarkGithub, ChevronRight} from '@githubprimer/octicons-react'
import {Text, Flex, Sticky, BorderBox, Box, StyledOcticon} from '@primer/components'
import Link from './Link'
import Search from './Search'

const BoxShadow = styled(Box)`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`

const HeaderText = props => <Text fontSize={2} {...props} />

const Header = ({title, subtitle, root, children}) => (
  <Sticky zIndex={100}>
    <BoxShadow py={3} bg="gray.9" color="white">
      <Flex className="p-responsive" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" justifyContent="center">
          <Link href={`https://primer.style/${root}`} color="white" mx={3}>
            <Flex alignItems="center">
              <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" />
              <Flex alignItems="center">
                <HeaderText ml={3} color="blue.4" fontFamily="mono" fontWeight="bold">
                  {title}
                </HeaderText>
                <StyledOcticon icon={ChevronRight} mx={2} color="blue.2" />
                <HeaderText fontWeight="bold" color="blue.2">
                  {subtitle}
                </HeaderText>
              </Flex>
            </Flex>
          </Link>
          <Search root={root} />
        </Flex>

        <Box display={['none', 'none', 'flex']}>{children}</Box>
        <Box display={['block', 'block', 'none']}>
          <Link href="#sidenav">
            <BorderBox
              border={1}
              borderColor="gray.6"
              borderRadius={3}
              color="white"
              display="inline-block"
              px="12px"
              py="6px"
            >
              <Text fontWeight="bold" fontSize={1}>
                Menu
              </Text>
            </BorderBox>
          </Link>
        </Box>
      </Flex>
    </BoxShadow>
  </Sticky>
)
Header.defaultProps = {
  root: ''
}
Header.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Header
