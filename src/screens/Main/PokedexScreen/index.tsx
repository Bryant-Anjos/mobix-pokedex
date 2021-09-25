import React, { useCallback, useRef } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import logo from '@assets/logo.png'

import styles from './styles'
import Chips from './components/Chips'
import FiltersModal, { FiltersModalRef } from './components/FiltersModal'
import Pokemons from './components/Pokemons'
import Search from './components/Search'
import { IconButton } from 'react-native-paper'

const ListScreen = () => {
  const modalRef = useRef<FiltersModalRef>(null)

  const dismiss = useCallback(() => {
    Keyboard.dismiss()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <SafeAreaView style={styles.container}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.search}>
            <Search />
            <IconButton
              icon="tune"
              onPress={() => modalRef.current?.show()}
              style={styles.icon}
            />
            <FiltersModal ref={modalRef} />
          </View>
          <Chips />
          <Pokemons />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default ListScreen
