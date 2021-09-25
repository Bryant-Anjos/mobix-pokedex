import React, { useCallback } from 'react'
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
import Search from './components/Search'
import Chips from './components/Chips'
import Pokemons from './components/Pokemons'
import { IconButton } from 'react-native-paper'

const ListScreen = () => {
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
              onPress={() => console.log('pressed')}
              style={styles.icon}
            />
          </View>
          <Chips />
          <Pokemons />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default ListScreen
