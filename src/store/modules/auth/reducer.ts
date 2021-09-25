import { Reducer } from 'redux'

import { AuthState } from './types'

const INITIAL_STATE: AuthState = {
  user: undefined,
  signed: true,
  loading: false,
}

const reducer: Reducer<AuthState> = (state = INITIAL_STATE) => {
  return state
}

export default reducer
