import '@config/reactotronConfig'

import React from 'react'
import * as eva from '@eva-design/eva'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ApplicationProvider } from '@ui-kitten/components'

import Routes from '@routes'
import { persistor, store } from '@store/index'

const App = () => (
  <StoreProvider store={store}>
    <PersistGate persistor={persistor}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Routes />
      </ApplicationProvider>
    </PersistGate>
  </StoreProvider>
)

export default App
