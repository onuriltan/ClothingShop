import React from 'react'

import './collection_preview.scss'

import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({ title, items}) => {
  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => {
              return <CollectionItem key={id} {...otherItemProps} />
            })
        }
      </div>
    </div>
  )
}

export default PreviewCollection
