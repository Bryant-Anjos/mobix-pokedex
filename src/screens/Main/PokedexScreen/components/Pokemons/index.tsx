import React from 'react'
import { FlatList } from 'react-native'

import Pokemon from './components/Pokemon'
import styles from './styles'

const Pokemons = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={Array.from({ length: 24 }, (v, k) => ({ key: String(k) }))}
      keyExtractor={_ => _.key}
      renderItem={() => <Pokemon />}
    />
  )
}

export default Pokemons
