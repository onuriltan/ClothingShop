import { SET_CURRENT_USER } from '../actions/user.actionTypes'

export const setCurrentUser = user =>({
  type: SET_CURRENT_USER,
  payload: user
})
