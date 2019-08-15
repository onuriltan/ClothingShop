import React from 'react'
import PropTypes from 'prop-types'
import CollectionPreview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionPreview} />
      <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
    </div>
  )
}
ShopPage.propTypes = {
  match: PropTypes.object.isRequired
}

export default ShopPage
