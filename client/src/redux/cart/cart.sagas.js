import { put, takeLatest } from 'redux-saga/effects'

import { clearCart } from './cart.actions'
import { SIGN_OUT_SUCCESS } from '../user/user.types'

// after sign out catch that action and clear cart
export function* clearCartOnSignOut () {
  yield put(clearCart())
}

export const cartSagas = [
  takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
]
