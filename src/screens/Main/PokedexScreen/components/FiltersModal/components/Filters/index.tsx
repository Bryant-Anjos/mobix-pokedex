import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, IconButton, Text } from 'react-native-paper'

import styles from './styles'
import Types from './components/Types'

type Props = {
  closeModal?(): void
}

const Filters = (props: Props) => {
  const { closeModal } = props

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Text style={styles.title}>Filtro</Text>
            <TouchableOpacity onPress={() => console.log('pressed')}>
              <Text style={styles.clean}>Limpar filtros</Text>
            </TouchableOpacity>
          </View>

          <IconButton icon="close" onPress={closeModal} />
        </View>

        <View style={styles.typesWrapper}>
          <Text style={styles.subtitle}>Tipo</Text>
          <Types />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={closeModal}
        >
          Aplicar
        </Button>
      </View>
    </View>
  )
}

export default Filters
