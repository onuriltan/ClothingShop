import { takeEvery, call, put, all } from 'redux-saga/effects'
import {
  FETCH_COLLECTIONS_START
}
  from './shop.types'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/FirebaseUtils'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

function* fetchCollectionsAsync () {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    // call içine aldığı metodu invoke eden bir function
    // convertCollectionsSnapshotToMap metodunu yield ederek call'un timeout süresini belirleyip iptal edebiliriz
    // gibi olanaklar sağlıyor
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    // put dispatchin aynısı, saga'da call olarak geçiyor
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}
// takeEvery creates non blocking code so
// application does not pause from other saga fucntions running
// Ayrıca cencel da edebiliriz sagaları, mesela fetchCollectionsStart yeniden çalıştı ama
// önceki devam ediyor, önceki çalışanı iptal edebiliriz
export const shopSagas = [
  takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
]
