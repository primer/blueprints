import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import {StyledOcticon, Heading, Box, Text} from '@primer/components'
import {Link} from '@githubprimer/octicons-react'

const Anchor = ({id}) =>
  <a href={`#${id}`}>
    <StyledOcticon color='black' icon={Link}/>
  </a>


const StyledHeading = styled(Heading)`
  &:hover .anchorWrapper {
    display: inline-block;
  }
  &:focus .anchorWrapper {
    display: inline-block;
  }
`
const MarkdownHeading = ({children, className, ...rest}) => {
  const id = children.toString().toLowerCase().replace(' ', '-')
  return (
    <StyledHeading id={id} className={className} {...rest}>
      <Box as={Text} lineHeight={1} className='anchorWrapper' pr={1} ml={'-20px'} display={'none'}>
        <Anchor id={id}/>
      </Box>
      {children}
    </StyledHeading>
  )
}

export default MarkdownHeading
