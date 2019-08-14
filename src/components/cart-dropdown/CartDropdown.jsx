import React from 'react'
import './cart_dropdown.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <span className='empty-message'> Your cart is empty </span>
        }
      </div>
      <CustomButton isShoppingItem onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = rootReducer => ({
  cartItems: selectCartItems(rootReducer)
})

export default withRouter(connect(mapStateToProps, null)(CartDropdown))
