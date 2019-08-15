import React from 'react'
import './collection_page.scss'
import PropTypes from 'prop-types'
import CollectionItem from '../../components/collection-item/CollectionItem'

const CollectionPage = ({match}) => {
  console.log(match)
  return (
    <div className='collection-page'>
      <h2>Collection Page</h2>
    </div>
  )
}
CollectionPage.propTypes = {
  match: PropTypes.object.isRequired
}

export default CollectionPage
