import { darken, lighten } from 'polished'
import React from 'react'
import { Image, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

const color = '#7159c7'

const getGradient = (baseColor: string): [string, string, string] => {
  return [lighten(0.2, baseColor), baseColor, darken(0.2, baseColor)]
}

const Sprite = () => {
  return (
    <View>
      <LinearGradient
        colors={getGradient(color)}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      />
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
        }}
        style={styles.image}
      />
    </View>
  )
}

export default Sprite
