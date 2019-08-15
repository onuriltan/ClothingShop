import React from 'react'
import './collections_overview.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { selectCollections } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(collection => {
        return <CollectionPreview key={collection.id}
          items={collection.items}
          title={collection.title} />
      })}
    </div>
  )
}

CollectionsOverview.propTypes = {
  collections: PropTypes.array.isRequired
}

const mapStateToProps = () => createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps, null)(CollectionsOverview)
