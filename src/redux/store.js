import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { persistStore } from 'redux-persist'
import rootReducer from './root.reducer'

const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares),
))
const persistor = persistStore(store)

export { store, persistor }
