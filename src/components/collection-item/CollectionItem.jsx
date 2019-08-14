import React from 'react'
import PropTypes from 'prop-types'
import './collection_item.scss'
import CustomButton from '../custom-button/CustomButton'

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton isShoppingCart>ADD TO CART</CustomButton>
    </div>
  )
}
CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CollectionItem
