import React from 'react'
import {BorderBox} from '@primer/components'

const Section = ({children}) => {
  return (
    <BorderBox p={5} border={0} borderBottom={1} borderRadius={0} width="100%">
      {children}
    </BorderBox>
  )
}

export default Section
