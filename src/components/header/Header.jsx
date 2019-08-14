import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/FirebaseUtils'
import { connect } from 'react-redux'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { setCurrentUser } from '../../redux/user/user.actions'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser
            ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            : <Link className='option' to='/sign-in'>SIGN IN </Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  currentUser: setCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
