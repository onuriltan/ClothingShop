import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { GlobalStyle } from './GlobalStyles'

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInandSignUpPage'
import CheckoutPage from './pages/checkout/CheckoutPage'

import { connect } from 'react-redux'
import { selectCurrentUser } from './redux/user/user.selector'
import { selectCartItemsCount } from './redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { checkIsUserIsAuthenticated } from './redux/user/user.actions'

class App extends React.Component {
  componentDidMount () {
    const { checkIsUserIsAuthenticated } = this.props
    checkIsUserIsAuthenticated()
  }

  render () {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render={() =>
            this.props.currentUser
              ? (<Redirect to='/' />)
              : (<SignInAndSignUp />)
          } />
          <Route exact path='/checkout' render={() =>
            this.props.cartItemsCount
              ? (<CheckoutPage />)
              : (<Redirect to='/' />)
          } />
        </Switch>
      </>
    )
  }
}

App.propTypes = {
  checkIsUserIsAuthenticated: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  cartItemsCount: PropTypes.number.isRequired
}

const mapDispatchToProps = dispatch => ({
  checkIsUserIsAuthenticated: () => dispatch(checkIsUserIsAuthenticated())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
