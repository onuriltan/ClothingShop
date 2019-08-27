import { all } from 'redux-saga/effects'
import { shopSagas } from './shop/shop.sagas'

export default function* rootSaga () {
  yield all([
    shopSagas
  ])
}
