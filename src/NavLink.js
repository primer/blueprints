import {withRouter} from 'next/router'
import NodeLink from './NodeLink'

export default withRouter(({is: Tag = NodeLink, href, router, ...rest}) => (
  <Tag href={href} color="white" px={4} fontWeight={router.pathname === href ? 'bold' : null} {...rest} />
))
