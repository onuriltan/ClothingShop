import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import Spinner from "../../components/spinner/Spinner";

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionsOverviewContainer'))
const CollectionPageContainer = lazy(() => import('../../pages/collection/CollectionPageContainer'))

class ShopPage extends React.Component {
  componentDidMount () {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render () {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner/>}>
          <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
          <Route path={`${match.path}/:collectionName`} component={CollectionPageContainer} />
        </Suspense>
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
