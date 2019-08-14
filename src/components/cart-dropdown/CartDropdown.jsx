import React from 'react'
import './cart_dropdown.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton isShoppingItem>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired
}

const mapStateToProps = rootReducer => ({
  cartItems: selectCartItems(rootReducer)
})

export default connect(mapStateToProps, null)(CartDropdown)
