import React from 'react'
import PropTypes from 'prop-types'
import './custom_button.scss'

const CustomButton = ({ children, isGoogleSignIn, isShoppingCart, ...otherProps }) => {
  return (
    <button className={`${isShoppingCart ? 'shopping-cart' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}>
      {children}
    </button>
  )
}
CustomButton.propTypes = {
  isGoogleSignIn: PropTypes.bool,
  isShoppingCart: PropTypes.bool,
  isShoppingItem: PropTypes.bool,
  children: PropTypes.string.isRequired
}
export default CustomButton
