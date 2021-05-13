import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as SessionActions from '../session/actions'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({
    ...SessionActions,
  }, dispatch)
}
