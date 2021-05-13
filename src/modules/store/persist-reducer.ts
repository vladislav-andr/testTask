import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createReducer from './create-reducer'

const persistConfig = { key: 'testTask', storage, whitelist: ['session'] }

const reducer = (asyncReducers: any) => persistReducer(persistConfig, createReducer(asyncReducers))

export default reducer
