import React from 'react'
import PropTypes from 'prop-types'
import CollectionPreview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection/CollectionPage'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils'

class ShopPage extends React.Component {
  // get collections from firestore and add collections to redux store
  componentDidMount () {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render () {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
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
