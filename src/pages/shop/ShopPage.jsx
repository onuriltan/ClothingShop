import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import CollectionPreview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  componentDidMount () {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render () {
    const { match, isCollectionFetching } = this.props

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (
          <CollectionPreviewWithSpinner isLoading={isCollectionFetching} {...props} />
        )} />
        <Route path={`${match.path}/:collectionName`} render={props => (
          <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
        )} />
      </div>
    )
  }
}
ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchCollectionsStartAsync: PropTypes.func.isRequired,
  isCollectionFetching: PropTypes.bool.isRequired
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
