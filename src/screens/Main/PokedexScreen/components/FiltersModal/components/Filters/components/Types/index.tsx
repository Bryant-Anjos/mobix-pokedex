import React from 'react'
import { FlatList } from 'react-native'

import Type from './components/Type'
import styles from './styles'

const Types = () => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={Array.from({ length: 18 }, (v, k) => ({ key: String(k) }))}
      keyExtractor={_ => _.key}
      renderItem={() => <Type />}
    />
  )
}

export default Types
