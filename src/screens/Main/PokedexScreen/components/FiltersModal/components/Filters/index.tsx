import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Button, IconButton, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'

import { selectType } from '@store/modules/filter/actions'

import styles from './styles'
import Types from './components/Types'

type Props = {
  closeModal?(): void
}

const Filters = (props: Props) => {
  const { closeModal } = props
  const dispatch = useDispatch()

  const [selected, setSelected] = useState<string>()

  const cleanFilter = () => {
    setSelected(undefined)
  }

  const onPressType = (type: string) => {
    setSelected(type)
  }

  const applyFilter = () => {
    dispatch(selectType(selected))
    closeModal?.()
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Text style={styles.title}>Filtro</Text>
            <TouchableOpacity onPress={cleanFilter}>
              <Text style={styles.clean}>Limpar filtros</Text>
            </TouchableOpacity>
          </View>

          <IconButton icon="close" onPress={closeModal} />
        </View>

        <View style={styles.typesWrapper}>
          <Text style={styles.subtitle}>Tipo</Text>
          <Types selected={selected} onPress={onPressType} />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={applyFilter}
        >
          Aplicar
        </Button>
      </View>
    </View>
  )
}

export default Filters
