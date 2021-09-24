import { Reducer } from 'redux'
import { persistReducer } from 'redux-persist'

import AsyncStorage from '@react-native-async-storage/async-storage'

const key = '123456'

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key,
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'client'],
    },
    reducers,
  )

  return persistedReducer
}
