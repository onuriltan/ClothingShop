import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import rootReducer from './root.reducer'
import rootSaga from './root.saga'

const sagaMiddleware = createSagaMiddleware()
const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__()

const middlewares = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, compose(middlewares, devToolsMiddleware))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
