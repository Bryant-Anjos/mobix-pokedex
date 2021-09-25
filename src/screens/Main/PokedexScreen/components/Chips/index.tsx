import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import Chip from './components/Chip'
import styles from './styles'

const Chips = () => {
  const [types, setTypes] = useState(['Planta', 'Água', 'Fogo', 'Elétrico'])

  const removeChip = useCallback(
    (type: string) => {
      const nextTypes = types.filter(t => t !== type)
      setTypes(nextTypes)
    },
    [types],
  )

  return (
    <View style={styles.wrapper}>
      {types.length === 0 && <Chip>Todos</Chip>}
      {types.length > 0 &&
        types.map(type => (
          <Chip key={type} onPressClose={removeChip}>
            {type}
          </Chip>
        ))}
    </View>
  )
}

export default Chips
