import React from 'react'
import PropTypes from 'prop-types'
import {Text} from '@primer/components'

export default function TermList(props) {
  const {children, prefixLastInList, separator, termComponent: Term, ...rest} = props
  const nodes = React.Children.map(children, term => (
    <Term key={term} {...rest}>
      {term}
    </Term>
  ))
  const last = nodes.length - 1
  return nodes.reduce((list, child, i) => {
    if (i > 0) {
      const sep = i === last ? prefixLastInList || separator : separator
      list.push(sep)
    }
    list.push(child)
    return list
  }, [])
}

TermList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string),
  prefixLastInList: PropTypes.node,
  separator: PropTypes.node,
  termComponent: PropTypes.element
}

TermList.defaultProps = {
  separator: ', ',
  prefixLastInList: ', or ',
  termComponent: ({children}) => children
}
