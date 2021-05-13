import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import persistStore from './persist-store'
import persistReducer from './persist-reducer'

const store = (initialState = {}) => {
  const middlewares = [thunk]
  const enhancers: Array<any> = []

  const store = createStore(
    persistReducer({}),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers),
  )

  const persistor = persistStore(store)

  return { store, persistor }
}

export default store
