import React from 'react'
import './cart_item.scss'
import PropTypes from 'prop-types'

const CartItem = ({item: { imageUrl, price, name, quantity }}) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
