import { TOGGLE_CART_HIDDEN, ADD_ITEM_TO_CART } from '../actions/cart.types'

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
        ...state, cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state
  }
}

export default cartReducer
