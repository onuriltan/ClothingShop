import { takeLatest, call, put } from 'redux-saga/effects'

import {
  GOOGLE_SIGN_IN_START
} from './user.types'

import { googleProvider, auth, createUserProfileDocument } from '../../firebase/FirebaseUtils'
import {
  googleSignInSuccess,
  googleSignInFailure
} from './user.actions'

export function* signInWithGoogle () {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    let userObject = {
      id: userSnapshot.id, ...userSnapshot.data()
    }
    yield put(googleSignInSuccess(userObject))
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export const userSagas = [
  takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
]
