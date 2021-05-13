import { setSearchData } from './actions'
import { SessionActionTypes, sessionState, SessionAction } from './types'

export const initialState: sessionState = {
  search: '',
  searchData: [],
  loading: false,
  count: 0,
}

export const reducer = (state = initialState, action: SessionAction): sessionState => {

  switch (action.type) {
    case SessionActionTypes.SEARCH:
      return { ...state, search: action.payload }
    case SessionActionTypes.SEARCHDATA:
      return { ...state, loading: false, searchData: action.payload }
    case SessionActionTypes.SEARCHDATANEXT:
      return { ...state, loading: false, searchData: [...state.searchData, ...action.payload] }
    case SessionActionTypes.COUNT:
      return { ...state, count: action.payload }
    case SessionActionTypes.LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
