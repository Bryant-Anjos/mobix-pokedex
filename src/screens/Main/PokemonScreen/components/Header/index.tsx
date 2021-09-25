import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import styles from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Charizard</Text>
      <Text style={styles.number}>#004</Text>
    </View>
  )
}

export default Header
