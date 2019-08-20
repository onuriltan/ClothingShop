import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils'

import WithSpinner from '../../components/with-spinner/WithSpinner'
import CollectionPreview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }
  // get collections from firestore and add collections to redux store
  componentDidMount () {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState( {loading: false})
    })
  }

  render () {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => (
           <CollectionPreviewWithSpinner isLoading={loading} {...props} />
        )}/>
        <Route path={`${match.path}/:collectionName`} render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}/>
      </div>
    )
  }
}
ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  updateCollections: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
