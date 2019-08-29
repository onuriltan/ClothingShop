import { takeLatest, call, put } from 'redux-saga/effects'

import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START
} from './user.types'

import { googleProvider, auth, createUserProfileDocument } from '../../firebase/FirebaseUtils'
import {
  signInSuccess,
  signInFailure
} from './user.actions'

export function* signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userObject = yield getUserObject(user)
    yield put(signInSuccess(userObject))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail ({ payload }) {
  const { email, password } = payload
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    const userObject = yield getUserObject(user)
    yield put(signInSuccess(userObject))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

function* getUserObject (user) {
  const userRef = yield call(createUserProfileDocument, user)
  const userSnapshot = yield userRef.get()
  return {
    id: userSnapshot.id, ...userSnapshot.data()
  }
}

export const userSagas = [
  takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle),
  takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
]
