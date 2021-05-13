import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/create-reducer'

export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector
