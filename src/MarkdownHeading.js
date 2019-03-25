import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import {StyledOcticon, Heading} from '@primer/components'
import {Link} from '@githubprimer/octicons-react'


const Anchor = ({id, className}) =>
  <a href={`#${id}`} className={classnames('anchor', className)}>
    <StyledOcticon color='black' icon={Link}/>
  </a>

const StyledHeading = styled(Heading)`
  .anchor {
    display: none;
  }
  &:hover .anchor {
    display: inline-block;
  }
  &:focus .anchor {
    display: inline-block;
  }
`
const MarkdownHeading = ({children, id, ...rest}) => {
  return (
    <StyledHeading id={id} {...rest}>
      <Anchor id={id}/>
      {children}
    </StyledHeading>
  )
}



export default MarkdownHeading
