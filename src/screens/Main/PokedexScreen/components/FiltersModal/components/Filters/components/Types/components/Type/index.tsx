import { lighten } from 'polished'
import React, { useState } from 'react'
import { Text, TouchableRipple } from 'react-native-paper'

import styles from './styles'

const Type = () => {
  const [selected, setSelected] = useState(false)

  const toggle = () => {
    setSelected(!selected)
  }

  return (
    <TouchableRipple
      rippleColor={lighten(0.3, '#2E6EB5')}
      onPress={toggle}
      style={[styles.button, selected && styles.buttonSelected]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>Type</Text>
    </TouchableRipple>
  )
}

export default Type
