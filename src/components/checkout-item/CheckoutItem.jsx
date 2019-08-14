import React from 'react'
import './checkout_item.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, removeItemFromCart, addItemToCart, clearItemFromCart}) => {
  const { name, quantity, price, imageUrl } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
    </div>
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  clearItemFromCart: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
