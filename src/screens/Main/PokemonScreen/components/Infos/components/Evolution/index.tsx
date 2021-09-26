import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Text } from 'react-native-paper'

import { IEvolution } from '@services/api/pokemon/types'

import styles from './styles'

type Props = {
  evolution: IEvolution[]
}

const Evolution = (props: Props) => {
  const { evolution = [] } = props
  console.log('evolution', evolution)

  const renderEvolutions = (pokemons: IEvolution[]) => {
    return pokemons.map(pokemon => (
      <View key={pokemon.id} style={styles.wrapper}>
        <LinearGradient
          colors={pokemon.palete}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
          <Image
            resizeMode="contain"
            source={{ uri: pokemon.image }}
            style={styles.image}
          />
          <Text style={styles.label}>{pokemon.name}</Text>
        </LinearGradient>
        <View style={styles.childWrapper}>
          {renderEvolutions(pokemon.evolution)}
        </View>
      </View>
    ))
  }

  return <View>{renderEvolutions(evolution)}</View>
}

export default Evolution
