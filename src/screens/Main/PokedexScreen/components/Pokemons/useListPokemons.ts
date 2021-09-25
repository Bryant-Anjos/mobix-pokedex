import { useState } from 'react'

import { list } from '@services/api/pokemon'
import { IPokemon } from '@services/api/pokemon/types'

export enum State {
  IDLE,
  LOADING,
  SUCESS,
  FAILURE,
}

type Result =
  | [State.IDLE, undefined]
  | [State.LOADING, undefined]
  | [State.SUCESS, IPokemon[]]
  | [State.FAILURE, Error]

export const useListPokemons = () => {
  const [result, setResult] = useState<Result>([State.IDLE, undefined])

  const listPokemons = () => {
    setResult([State.LOADING, undefined])

    list()
      .then(response => setResult([State.SUCESS, response]))
      .catch(error => setResult([State.FAILURE, error]))
  }

  return { listPokemons, result }
}
