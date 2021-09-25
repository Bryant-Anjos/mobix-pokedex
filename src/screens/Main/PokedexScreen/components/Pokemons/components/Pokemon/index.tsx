import React from 'react'
import { Text } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { darken, lighten } from 'polished'

import styles from './styles'
import { View } from 'react-native'

const getGradient = (baseColor: string): [string, string, string] => {
  return [lighten(0.2, baseColor), baseColor, darken(0.2, baseColor)]
}

const Pokemons = () => {
  return (
    <LinearGradient
      colors={getGradient('#7159c7')}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.label}>
        <Text style={styles.text}>Pokémon</Text>
      </View>
    </LinearGradient>
  )
}

export default Pokemons
