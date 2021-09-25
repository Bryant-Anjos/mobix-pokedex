import axios from 'axios'

import api from './api'
import { mapTypeToColor } from '@utils/mapTypeToColor'
import { getGradient } from '@utils/getGradient'
import { getPokemonImage } from '@utils/getPokemonImage'

type Pagination = {
  offset: number
  limit: number
}

export interface IPokemon {
  id: number
  name: string
  type: string
  color: string
  image: string
  palete: [string, string, string]
}

const list = async (pagination?: Pagination): Promise<IPokemon[]> => {
  const { limit = 20, offset = 0 } = pagination ?? {}

  return await api
    .get(`pokemon?limit=${limit}&offset=${offset}`)
    .then(async response => {
      return await Promise.all(
        response.data.results.map(async (data: any) => {
          return await axios.get(data.url).then(({ data: pokemon }: any) => {
            const { id, name } = pokemon
            const type = pokemon.types[0].type.name
            const color = mapTypeToColor(type)
            const image = getPokemonImage(id)
            const palete = getGradient(color)

            return {
              id,
              name,
              type,
              color,
              image,
              palete,
            } as IPokemon
          })
        }),
      )
    })
}

export default list
