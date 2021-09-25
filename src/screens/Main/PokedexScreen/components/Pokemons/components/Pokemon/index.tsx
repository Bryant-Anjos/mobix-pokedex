import React from 'react'
import { Text, TouchableRipple } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { darken, lighten } from 'polished'

import styles from './styles'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const color = '#7159c7'

const getGradient = (baseColor: string): [string, string, string] => {
  return [lighten(0.2, baseColor), baseColor, darken(0.2, baseColor)]
}

const Pokemons = () => {
  const navigation = useNavigation()

  const navigateToPokemonScreen = () => {
    navigation.navigate('PokemonScreen', {
      pokemonNumber: 1,
    })
  }

  return (
    <LinearGradient
      colors={getGradient(color)}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <TouchableRipple
        rippleColor={darken(0.4, color)}
        onPress={navigateToPokemonScreen}
        style={styles.touchable}
      >
        <View style={styles.label}>
          <Text style={styles.text}>Pokémon</Text>
        </View>
      </TouchableRipple>
    </LinearGradient>
  )
}

export default Pokemons
