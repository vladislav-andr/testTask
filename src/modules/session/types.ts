import { IProfileAPI, IUsers } from "../../types/interface"

export const STATE = `SESSION`

export interface sessionState {
  search: string
  searchData: IUsers[]
  loading: boolean
  count: number
}

export enum SessionActionTypes {
  SEARCH = `SESSION_SEARCH`,
  SEARCHDATA = `SESSION_SEARCHDATA`,
  SEARCHDATANEXT = `SESSION_SEARCHDATANEXT`,
  COUNT = `SESSION_COUNT`,
  LOADING = `SESSION_LOADING`,
}

export interface SessionSearchAction {
  type: SessionActionTypes.SEARCH
  payload: string
}

export interface SessionSearchDataAction {
  type: SessionActionTypes.SEARCHDATA
  payload: IUsers[]
}

export interface SessionSearchDataNextAction {
  type: SessionActionTypes.SEARCHDATANEXT
  payload: IUsers[]
}

export interface SessionCountAction {
  type: SessionActionTypes.COUNT
  payload: number
}

export interface SessionLoadingAction {
  type: SessionActionTypes.LOADING
  payload: boolean
}

export type SessionAction = SessionSearchAction | SessionSearchDataAction | SessionSearchDataNextAction | SessionLoadingAction | SessionCountAction
