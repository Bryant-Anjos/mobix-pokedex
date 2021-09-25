import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as Screens from '@screens/Main'

const Stack = createStackNavigator()

const MainRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PokedexScreen" component={Screens.PokedexScreen} />
  </Stack.Navigator>
)

export default MainRoutes
