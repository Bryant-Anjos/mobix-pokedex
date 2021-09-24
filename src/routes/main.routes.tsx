import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as Screens from '@screens/Auth'

const Stack = createStackNavigator()

const MainRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainScreen" component={Screens.SignIn} />
  </Stack.Navigator>
)

export default MainRoutes
