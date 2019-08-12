import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import PropTypes from 'prop-types'

import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInandSignUp'

import { auth, createUserProfileDocument } from './firebase/FirebaseUtils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/actions/user.actions'

class App extends React.Component {
  componentDidMount () {
    const { setCurrentUser } = this.props
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </>
    )
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
