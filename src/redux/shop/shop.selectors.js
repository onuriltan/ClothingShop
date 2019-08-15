import { createSelector } from 'reselect'

// to get collections in their respective nested shop/:collectionId page
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollection = collectionName => createSelector(
  [selectCollections],
  collections => collections.find(
    collection => collection.id === COLLECTION_ID_MAP[collectionName]
  )
)

