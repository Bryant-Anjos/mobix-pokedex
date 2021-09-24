import 'react-native-gesture-handler'

import React from 'react'
import { useSelector } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ApplicationState } from '@store/types'

import AuthRoutes from './auth.routes'
import MainRoutes from './main.routes'

const Stack = createStackNavigator()

function Routes() {
  const signed = useSelector((state: ApplicationState) => state.auth.signed)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        ) : (
          <Stack.Screen name="MainRoutes" component={MainRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
