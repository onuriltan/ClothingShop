import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cart.actions'

import {
  CollectionItemContainer,
  Footer,
  Image,
  Name,
  Price,
  AddButton
} from './CollectionItemStyles'

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item
  return (
    <CollectionItemContainer>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddButton isShoppingCart onClick={() => addItemToCart(item)}>ADD TO CART</AddButton>
    </CollectionItemContainer>
  )
}
CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
