import { takeLatest, call, put } from 'redux-saga/effects'

import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  CHECK_USER_AUTHENTICATED, SIGN_OUT_START, SIGN_UP_START, SIGN_UP_SUCCESS
} from './user.types'

import { googleProvider, auth, createUserProfileDocument } from '../../firebase/FirebaseUtils'
import {
  signInSuccess, signInFailure,
  signOutFailure, signOutSuccess,
  signUpSuccess, signUpFailure
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

export function* signUp ({payload: { email, password, displayName }}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, additionalInfo: { displayName } }))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp ({ payload: { user, additionalData } }) {
  yield getUserObject(user, additionalData)
}

export function* getUserObject (userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    )
    const userSnapshot = yield userRef.get()
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export const userSagas = [
  takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle),
  takeLatest(EMAIL_SIGN_IN_START, signInWithEmail),
  takeLatest(CHECK_USER_AUTHENTICATED, checkIsUserAuthenticated),
  takeLatest(SIGN_OUT_START, signOutStart),
  takeLatest(SIGN_UP_START, signUp),
  takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
]
