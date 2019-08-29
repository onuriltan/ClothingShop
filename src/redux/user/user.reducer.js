import {
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START
} from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_START:
    case EMAIL_SIGN_IN_START:
      return {
        ...state,
        error: null
      }

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }

    case SIGN_IN_FAILURE:
      return {
        ...state, error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
