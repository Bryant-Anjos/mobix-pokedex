import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { IPokemon } from '@services/api/pokemon/types'

import Pokemon from './components/Pokemon'
import styles from './styles'
import { State, useListPokemons } from './useListPokemons'
import { ActivityIndicator } from 'react-native-paper'

const Pokemons = () => {
  const { result, listPokemons } = useListPokemons()

  const [pokemons, setPokemons] = useState<IPokemon[]>([])

  useEffect(() => {
    listPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    switch (result[0]) {
      case State.SUCESS: {
        const [, newPokemons] = result
        setPokemons(p => [...p, ...newPokemons])
        break
      }
    }
  }, [result])

  const renderFooter = () => {
    if (result[0] !== State.LOADING) {
      return null
    }
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={pokemons}
      keyExtractor={pokemon => pokemon.name}
      renderItem={({ item }) => <Pokemon pokemon={item} />}
      onEndReached={listPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
    />
  )
}

export default Pokemons
