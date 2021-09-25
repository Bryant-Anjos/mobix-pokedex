import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import * as Screens from '@screens/Main'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      PokedexScreen: undefined
      PokemonScreen: { pokemonNumber: number }
    }
  }
}

const Stack = createStackNavigator()

const MainRoutes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="PokedexScreen" component={Screens.PokedexScreen} />
    <Stack.Screen name="PokemonScreen" component={Screens.PokemonScreen} />
  </Stack.Navigator>
)

export default MainRoutes
