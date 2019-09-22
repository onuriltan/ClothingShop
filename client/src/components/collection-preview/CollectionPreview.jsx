import React from 'react'
import { withRouter } from 'react-router-dom'
import * as PropTypes from 'prop-types'
import CollectionItem from '../collection-item/CollectionItem'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './CollectionPreviewStyles'

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default withRouter(CollectionPreview)

