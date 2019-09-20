import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import PaymentButton from '../../components/payment-button/PaymentButton'

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  ButtonContainer,
  Total,
  Warning
} from './CheckoutPageStyles'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <Total>
        <span>TOTAL: ${totalPrice}</span>
      </Total>
      <Warning>
        * Please use the following test card for payments *
        <br />
        4242 4242 4242 4242 -- Expiry: 01/20 -- CVV: 123
      </Warning>
      <ButtonContainer>
        <PaymentButton price={totalPrice} />
      </ButtonContainer>
    </CheckoutPageContainer>
  )
}

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)
