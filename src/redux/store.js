import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistStore } from 'redux-persist'
import rootReducer from './root.reducer'

const middlewares = []
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
))
const persistor = persistStore(store)

export { store, persistor }
