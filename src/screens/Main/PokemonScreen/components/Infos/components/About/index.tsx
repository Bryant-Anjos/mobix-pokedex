import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import styles from './styles'

export type AboutItem = {
  name: string
  value: string | string[]
}

type Props = {
  about: AboutItem[]
}

const Infos = (props: Props) => {
  const { about = [] } = props

  return (
    <View>
      {about.map(item => (
        <View key={item.name} style={styles.item}>
          <View style={styles.left}>
            <Text style={styles.textLeft}>{item.name}</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.textRight}>
              {Array.isArray(item.value) ? item.value.join(', ') : item.value}
            </Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default Infos
