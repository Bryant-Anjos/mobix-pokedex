import React from 'react'
import { Text, TouchableRipple } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'
import { darken, lighten } from 'polished'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import styles from './styles'

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
      style={styles.gradient}
    >
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <TouchableRipple
          rippleColor={darken(0.4, color)}
          onPress={navigateToPokemonScreen}
          style={styles.touchable}
        >
          <View style={styles.label}>
            <Text style={styles.text}>Pokémon</Text>
          </View>
        </TouchableRipple>
      </View>
    </LinearGradient>
  )
}

export default Pokemons
