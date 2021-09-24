import { SagaMonitor } from '@redux-saga/core'
import { ReactotronReactNative } from 'reactotron-react-native'

declare global {
  interface Console {
    tron: ReactotronReactNative & {
      createSagaMonitor?: () => SagaMonitor
    }
  }
}
