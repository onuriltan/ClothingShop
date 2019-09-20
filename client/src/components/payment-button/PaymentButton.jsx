import React from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const PaymentButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token
      }
    }).then(res => {
      window.alert('Payment is successful!')
    }).catch(err => {
      console.log('Payment error: ' + JSON.parse(err))
      window.alert('Payment is unsuccessful :( Make sure you provided correct credit card info')
    })
    console.log(token)
  }

  return (
    <StripeCheckout
      label={process.env.REACT_APP_PAYMENT_BUTTON_NAME}
      name={process.env.REACT_APP_BUSINESS_NAME}
      image={process.env.REACT_APP_BUSINESS_LOGO_URL}
      stripeKey={publishableKey}
      billingAdress
      shippingAddress
      amount={priceInCents}
      panelLabel={process.env.REACT_APP_PAYMENT_BUTTON_NAME}
      token={onToken}
    />
  )
}

PaymentButton.propTypes = {
  price: PropTypes.number.isRequired
}

export default PaymentButton
