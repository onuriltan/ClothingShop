import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import './cart_icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}
CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired
}

// get item count from cartItems state via selector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
