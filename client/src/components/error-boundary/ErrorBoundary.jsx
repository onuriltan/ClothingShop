import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import * as PropTypes from 'prop-types'

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorImageTextHeader,
  ButtonContainer
} from './ErrorBoundaryStyles'

import CustomButton from '../custom-button/CustomButton'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasErrored: false }
  }

  static getDerivedStateFromError (error) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error)
  }

  render () {
    if (this.state.hasErrored === true) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://proxy.duckduckgo.com/iu/?u=https://i.imgur.com/A040Lxr.png' />
          <ErrorImageTextHeader>
            Oops! Error
          </ErrorImageTextHeader>
          <ErrorImageText>
           Something went wrong
          </ErrorImageText>
          <ButtonContainer>
            <CustomButton onClick={() => this.props.history.goBack()}>Go Back</CustomButton>
            <CustomButton onClick={() => window.location.reload(true)}>Try Again</CustomButton>
          </ButtonContainer>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(ErrorBoundary)
