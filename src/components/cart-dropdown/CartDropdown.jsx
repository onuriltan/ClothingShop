import React from 'react'
import './cart_dropdown.scss'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton isShoppingItem>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown
