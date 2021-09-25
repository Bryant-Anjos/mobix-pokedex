import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

// import styles from './styles'

type Props = {
  children: string
}

const Infos = (props: Props) => {
  const { children } = props

  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default Infos
