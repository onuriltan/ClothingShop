import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/CollectionItem'

import {
  CollectionPageContainer,
  Items,
  Title
} from './CollectionPageStyles'

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <div />
  }
  const { title, items } = collection
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {
          items && items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </Items>
    </CollectionPageContainer>
  )
}
CollectionPage.propTypes = {
  collection: PropTypes.object
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage)
