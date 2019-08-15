import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />
        })
      }
    </div>
  )
}

ShopPage.propTypes = {
  collections: PropTypes.array.isRequired
}

const mapStateToProps = () => createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps, null)(ShopPage)
