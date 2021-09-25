import React from 'react'
import { ScrollView } from 'react-native'

import Header from './components/Header'
import Infos from './components/Infos'
import Sprite from './components/Sprite'
import Types from './components/Types'
import styles from './styles'

const PokemonScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Types />
      <Sprite />
      <Infos />
    </ScrollView>
  )
}

export default PokemonScreen
