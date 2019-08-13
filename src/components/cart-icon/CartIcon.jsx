import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleCartHidden } from '../../redux/actions/cart.actions'
import './cart_icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired
}
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
