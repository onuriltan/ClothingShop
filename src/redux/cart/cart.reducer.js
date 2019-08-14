import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from './cart.types'
import { combineSameItems } from '../../utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state, hidden: !state.hidden
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state, cartItems: combineSameItems(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
