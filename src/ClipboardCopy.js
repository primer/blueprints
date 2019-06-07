import React from 'react'
import {findDOMNode} from 'react-dom'
import {Button, StyledOcticon} from '@primer/components'
import {Check, Clippy} from '@githubprimer/octicons-react'

export default class ClipboardCopy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {copied: false}
  }
  onClick() {
    this.copy()

    /* set copied and reset it in 1.5s */
    this.setState({copied: true})
    window.setTimeout(() => {
      this.setState({copied: false})
    }, 1500)
  }
  copy() {
    const {value = ''} = this.props
    const {clipboard} = window.navigator
    const done = () => {
      // eslint-disable-next-line react/no-find-dom-node
      findDOMNode(this).dispatchEvent(new CustomEvent('copy', {bubbles: false}))
    }
    if (clipboard) {
      return clipboard.writeText(value).then(done)
    } else if (!document.body) {
      return
    } else {
      const node = document.createElement('pre')
      node.style.width = '1px'
      node.style.height = '1px'
      node.style.position = 'fixed'
      node.style.top = '5px'
      node.textContent = value

      const selection = window.getSelection()
      document.body.appendChild(node)
      selection.removeAllRanges()
      const range = document.createRange()
      range.selectNodeContents(node)
      selection.addRange(range)
      document.execCommand('copy')
      selection.removeAllRanges()
      document.body.removeChild(node)
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {value = ''} = this.props

    return (
      <Button onClick={this.onClick.bind(this)} type="button">
        <StyledOcticon icon={this.state.copied ? Check : Clippy} color={this.state.copied ? 'green.5' : 'inherit'} />
      </Button>
    )
  }
}
