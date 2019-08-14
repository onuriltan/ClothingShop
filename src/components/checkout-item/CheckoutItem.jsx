import React from 'react'
import './checkout_item.scss'
import PropTypes from 'prop-types'

const CheckoutItem = ({cartItem: { name, quantity, price, imageUrl }}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button'>&#10005;</span>
    </div>
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object.isRequired
}

export default CheckoutItem
