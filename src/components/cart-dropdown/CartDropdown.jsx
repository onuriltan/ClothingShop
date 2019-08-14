import React from 'react'
import './cart_dropdown.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const onClick = () => {
    history.push('/checkout')
    toggleCartHidden()
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length
            ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            : <span className='empty-message'> Your cart is empty </span>
        }
      </div>
      <CustomButton isShoppingItem onClick={() => onClick()}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

CartDropdown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  toggleCartHidden: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = rootReducer => ({
  cartItems: selectCartItems(rootReducer)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
