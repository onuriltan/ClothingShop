import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
import CollectionPageContainer from '../../pages/collection/CollectionPageContainer'

class ShopPage extends React.Component {
  componentDidMount () {
    const { fetchCollectionsStart } = this.props
    console.log(fetchCollectionsStart)
    fetchCollectionsStart()
  }

  render () {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionName`} component={CollectionPageContainer} />
      </div>
    )
  }
}
ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchCollectionsStart: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
