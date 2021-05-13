import { combineReducers } from 'redux'

import { STATE } from '../session/types'
import { reducer } from '../session/reducers'

const rootReducer = (asyncReducers: object) => {
  return (
    combineReducers({
      ...asyncReducers,
      [STATE]: reducer,
    })
  )
}

export default rootReducer

export type RootState = ReturnType<ReturnType<typeof rootReducer>>
