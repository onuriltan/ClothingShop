import React from 'react'
import './collection_page.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem'

const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>Collection Page</h2>
    </div>
  )
}
CollectionPage.propTypes = {
  collection: PropTypes.array.isRequired
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage)
