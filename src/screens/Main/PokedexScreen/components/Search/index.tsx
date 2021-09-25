import React from 'react'
import { TextInput } from 'react-native-paper'

import styles from './styles'

const Chips = () => {
  return (
    <TextInput
      mode="outlined"
      placeholder="Buscar Pokémon"
      theme={{ colors: { background: '#E5E5E5' }, roundness: 30 }}
      outlineColor="#E5E5E5"
      style={styles.search}
    />
  )
}

export default Chips
