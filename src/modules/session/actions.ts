import axios from '../../api/axios'
import { Dispatch } from 'react'
import { SessionAction, SessionActionTypes } from './types'

export const setSearch = (payload: string) => ({ type: SessionActionTypes.SEARCH, payload })

export const setSearchData = (payload: string[]) => ({ type: SessionActionTypes.SEARCHDATA, payload })

export const setLoading = (payload: boolean) => ({ type: SessionActionTypes.LOADING, payload })

export const setSearchList = (search: string) => (dispatch: Dispatch<SessionAction>) => {
  dispatch({ type: SessionActionTypes.SEARCH, payload: search })
  axios.get(`/search/users?q=${search}&per_page=20`)
    .then(res => {
      dispatch({ type: SessionActionTypes.COUNT, payload: res?.data?.total_count })
      dispatch({ type: SessionActionTypes.SEARCHDATA, payload: res?.data?.items })
      return res
    })
}

export const setSearchNext = (search: string, page: number) => (dispatch: Dispatch<SessionAction>) =>
  axios.get(`/search/users?q=${search}&per_page=20&page=${page}`)
    .then(res => {
      dispatch({ type: SessionActionTypes.SEARCHDATANEXT, payload: res?.data?.items })
      return res
    })