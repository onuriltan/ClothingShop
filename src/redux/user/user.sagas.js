import { takeLatest, call, put } from 'redux-saga/effects'

import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  CHECK_USER_AUTHENTICATED, SIGN_OUT_START
} from './user.types'

import { googleProvider, auth, createUserProfileDocument } from '../../firebase/FirebaseUtils'
import {
  signInSuccess,
  signInFailure, signOutFailure, signOutSuccess
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

export function* checkIsUserAuthenticated () {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    const userObject = yield getUserObject(userAuth)
    yield put(signInSuccess(userObject))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOutStart () {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
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
  takeLatest(EMAIL_SIGN_IN_START, signInWithEmail),
  takeLatest(CHECK_USER_AUTHENTICATED, checkIsUserAuthenticated),
  takeLatest(SIGN_OUT_START, signOutStart)
]
