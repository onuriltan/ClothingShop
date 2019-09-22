import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spinner/Spinner'

const WithSpinner = WrappedComponent => ({ isLoading, ...componentProps }) => {
  return isLoading
    ? <Spinner />
    : <WrappedComponent {...componentProps} />
}

WithSpinner.propTypes = {
  WrappedComponent: PropTypes.object.isRequired,
}

export default WithSpinner
