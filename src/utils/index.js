export const combineSameItems = (cartItems, cartItemToAdd) => {
  const sameItem = cartItems.find(item => cartItemToAdd.id === item.id)
  if (sameItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}
