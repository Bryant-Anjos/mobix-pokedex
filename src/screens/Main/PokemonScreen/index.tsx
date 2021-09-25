import React from 'react'
import { ScrollView } from 'react-native'

import Header from './components/Header'
import Infos from './components/Infos'
import Sprite from './components/Sprite'
import Types from './components/Types'
import styles from './styles'
import { State, useGetPokemon } from './useGetPokemon'

type Props = {
  route: {
    params: {
      pokemonNumber: number
    }
  }
}

const PokemonScreen = (props: Props) => {
  const { pokemonNumber } = props.route.params
  const result = useGetPokemon(pokemonNumber)

  switch (result[0]) {
    case State.SUCESS: {
      const [, pokemon] = result

      return (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Header name={pokemon.name} number={pokemon.id} />
          <Types color={pokemon.color} types={pokemon.types} />
          <Sprite colorPalete={pokemon.palete} image={pokemon.image} />
          <Infos />
        </ScrollView>
      )
    }
    default:
      return <></>
  }
}

export default PokemonScreen
